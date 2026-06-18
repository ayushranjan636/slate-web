import { openai } from '@ai-sdk/openai';
import { streamText, tool, convertToModelMessages, type UIMessage } from 'ai';
import { z } from 'zod';

export const maxDuration = 30;

const systemPrompt = `
You are the official support assistant for SlateMate and eRaksha. Your goal is to help users understand our product, our mission, and assist them in joining our waitlist.

About SlateMate / eRaksha:
- eRaksha is an AI-powered child digital safety platform created by SlateMate.
- It provides a DNS protection layer, an AI Child Companion (for emotional support, habit building, and explaining blocked content), a Parent Dashboard, and safe social learning.
- It is privacy-first, with no ads and no data selling.
- SlateMate is an IIT Madras Incubation Cell incubated startup, and a DPIIT Recognized Startup.
- Pricing: The core app is free. The Premium Plan is ₹299/month per child.
- eRaksha is launching publicly on July 16th, 2026.

Rules:
- Be warm, empathetic, and concise.
- ONLY answer questions related to SlateMate, eRaksha, digital child safety, parenting in the digital age, and joining the waitlist.
- If a user asks an unrelated question (e.g., coding help, general knowledge, weather), politely decline and steer the conversation back to how you can help them with eRaksha.
- If the user wants to join the waitlist, you MUST use the \`joinWaitlist\` tool to collect their information (Name, Email, Phone, City).
`;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "The Chatbot requires an OpenAI API Key. Please add OPENAI_API_KEY to your .env.local file." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages }: { messages: UIMessage[] } = await req.json();
  const modelId = process.env.OPENAI_MODEL || 'gpt-4o';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || new URL(req.url).origin;

  const result = streamText({
    model: openai(modelId),
    system: systemPrompt,
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
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, phone, city }),
            });

            if (!res.ok) {
              return `There was an issue registering ${name}. Please try again or visit our website to join the waitlist.`;
            }

            return `Successfully added ${name} to the waitlist! We will contact them at ${email} soon. They can also join our WhatsApp community at https://chat.whatsapp.com/GPwdAcFrLhzFN69qIvPgV0`;
          } catch {
            console.error('[Chatbot Waitlist] Failed to call waitlist API');
            return `Successfully noted ${name}'s interest. We will reach out at ${email} soon.`;
          }
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
