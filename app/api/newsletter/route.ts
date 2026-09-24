import { NextResponse } from "next/server";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { getISTTimestamp } from "@/lib/utils";
import { getClientIp, isValidEmail, rateLimit } from "@/lib/api-guard";

export async function POST(req: Request) {
  if (!rateLimit(`newsletter:${getClientIp(req)}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    await submitToGoogleSheet({ sheet: "newsletter", email, timestamp: getISTTimestamp() });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the newsletter!",
    });
  } catch (error) {
    console.error("[Newsletter] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
