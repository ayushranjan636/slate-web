import { NextResponse } from "next/server";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { getISTTimestamp } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const timestamp = getISTTimestamp();

    await submitToGoogleSheet({
      sheet: "newsletter",
      email,
      timestamp,
    });

    console.log("[Newsletter] New signup:", JSON.stringify({ email, timestamp }));

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
