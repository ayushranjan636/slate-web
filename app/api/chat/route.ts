import { openai } from '@ai-sdk/openai';
import { streamText, tool, convertToModelMessages, type UIMessage } from 'ai';
import { z } from 'zod';
import { getClientIp, rateLimit } from '@/lib/api-guard';

export const maxDuration = 30;

const systemPrompt = `
You are the official support assistant for SlateMate and eRaksha. Your goal is to help users understand our product, our mission, and assist them in joining our waitlist.

About SlateMate / eRaksha:
- eRaksha is an AI-powered child digital safety platform created by SlateMate.
- It provides a DNS protection layer, an AI Child Companion (for emotional support, habit building, and explaining blocked content), a Parent Dashboard, and safe social learning.
- It is privacy-first, with no ads and no data selling.
- SlateMate is an IIT Madras Incubation Cell incubated startup, and a DPIIT Recognized Startup.
- Pricing: There are two plans: the Free plan (free forever) and the Premium plan at ₹349 per month per child. There are no other tiers, no yearly plans and no Standard plan.
- eRaksha officially launches on 14th November 2026. Until then, users can join the waitlist for early access.

Rules:
- Be warm, empathetic, and concise.
- ONLY answer questions related to SlateMate, eRaksha, digital child safety, parenting in the digital age, and joining the waitlist.
- If a user asks an unrelated question (e.g., coding help, general knowledge, weather), politely decline and steer the conversation back to how you can help them with eRaksha.
- If the user wants to join the waitlist, you MUST use the \`joinWaitlist\` tool to collect their information (Name, Email, Phone, City).
`;

export async function POST(req: Request) {
  const clientIp = getClientIp(req);
  // Protect the OpenAI bill from scripted abuse: 20 requests / 10 min per IP.
  if (!rateLimit(`chat:${clientIp}`, 20, 10 * 60 * 1000)) {
    return new Response(
      JSON.stringify({ error: "You're sending messages too quickly. Please wait a few minutes and try again." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "The Chatbot requires an OpenAI API Key. Please add OPENAI_API_KEY to your .env.local file." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let messages: UIMessage[];
  try {
    const body = await req.json();
    messages = body?.messages;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400 });
  }

  // Cap conversation size so a single request can't burn excessive tokens.
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30 || JSON.stringify(messages).length > 20_000) {
    return new Response(JSON.stringify({ error: "Conversation is too long. Please refresh and start a new chat." }), { status: 400 });
  }

  const modelId = process.env.OPENAI_MODEL || 'gpt-4o';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || new URL(req.url).origin;

  const result = streamText({
    model: openai(modelId),
    system: systemPrompt,
    maxOutputTokens: 600,
    messages: await convertToModelMessages(messages),
    tools: {
      joinWaitlist: tool({
        description: 'Add a user to the eRaksha waitlist. Use this whenever a user expresses interest in joining the waitlist.',
        inputSchema: z.object({
          name: z.string().describe('The full name of the user'),
          email: z.string().email().describe('The email address of the user (Gmail preferred)'),
          phone: z.string().describe('The contact phone number of the user'),
          city: z.string().describe('The city where the user lives'),
        }),
        execute: async ({ name, email, phone, city }) => {
          // Call the real waitlist API
          try {
            const res = await fetch(`${baseUrl}/api/waitlist`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'x-forwarded-for': clientIp },
              body: JSON.stringify({ name, email, phone, city }),
            });

            if (!res.ok) {
              const data = await res.json().catch(() => null);
              return `Could not register ${name}: ${data?.error ?? "unknown error"}. Ask the user to correct the details, or join via the "Join Waiting List" button on the website.`;
            }

            return `Successfully added ${name} to the waitlist! We will contact them at ${email} soon. They can also join our WhatsApp community at https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0`;
          } catch {
            console.error('[Chatbot Waitlist] Failed to call waitlist API');
            return `The waitlist could not be reached right now, so ${name} was NOT registered. Ask the user to try again shortly or use the "Join Waiting List" button on the website.`;
          }
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
