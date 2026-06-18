type SheetName = "waitlist" | "newsletter";

type WaitlistPayload = {
  sheet: "waitlist";
  name: string;
  email: string;
  phone: string;
  city: string;
  timestamp: string;
};

type NewsletterPayload = {
  sheet: "newsletter";
  email: string;
  timestamp: string;
};

type SheetPayload = WaitlistPayload | NewsletterPayload;

const GOOGLE_SHEETS_WEB_APP_URL =
  process.env.GOOGLE_SHEETS_WEB_APP_URL ||
  "https://script.google.com/macros/s/AKfycby6huOAZarSr9RnSglq-nlho3f69Jj3iPzXtXiuGBZltWFGd0eJDQwuOrj5iDbnCRKc/exec";

export async function submitToGoogleSheet(payload: SheetPayload) {
  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    throw new Error("Google Sheets web app URL is not configured.");
  }

  const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets request failed with status ${response.status}`);
  }

  return response;
}

export type { SheetName, SheetPayload };
