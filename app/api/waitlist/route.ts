import { NextResponse } from "next/server";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { getISTTimestamp } from "@/lib/utils";
import { cleanText, getClientIp, isValidEmail, isValidPhone, rateLimit } from "@/lib/api-guard";

export async function POST(req: Request) {
  if (!rateLimit(`waitlist:${getClientIp(req)}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const name = cleanText(body?.name);
    const city = cleanText(body?.city);
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";

    if (!name || !email || !phone || !city) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const timestamp = getISTTimestamp();

    await submitToGoogleSheet({ sheet: "waitlist", name, email, phone, city, timestamp });

    return NextResponse.json({ success: true, message: "Successfully joined the waitlist!" });
  } catch (error) {
    // Don't pretend success: surface the failure so the lead isn't silently lost.
    console.error("[Waitlist] Error:", error);
    return NextResponse.json(
      { error: "We couldn't save your details right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
