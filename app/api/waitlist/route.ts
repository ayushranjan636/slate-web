import { NextResponse } from "next/server";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { getISTTimestamp } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, city } = body;

    if (!name || !email || !phone || !city) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const timestamp = getISTTimestamp();
    const entry = { name, email, phone, city, timestamp };

    console.log("[Waitlist] New signup:", JSON.stringify(entry));

    try {
      await submitToGoogleSheet({
        sheet: "waitlist",
        ...entry,
      });
    } catch (sheetError) {
      console.error("[Waitlist] Google Sheets error:", sheetError);

      const fs = await import("fs/promises");
      const path = await import("path");
      const filePath = path.join(process.cwd(), "waitlist-data.json");

      let existing: typeof entry[] = [];
      try {
        const data = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(data);
      } catch {
        // File doesn't exist yet, start fresh
      }

      existing.push(entry);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
    }

    return NextResponse.json({ success: true, message: "Successfully joined the waitlist!" });
  } catch (error) {
    console.error("[Waitlist] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
