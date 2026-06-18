/**
 * Deploy this as a Google Apps Script web app bound to your spreadsheet.
 *
 * Setup:
 * 1. Create a spreadsheet with two tabs: "Waitlist" and "Newsletter"
 * 2. Waitlist headers (row 1): Timestamp | Name | Email | Phone | City
 * 3. Newsletter headers (row 1): Timestamp | Email
 * 4. Extensions -> Apps Script -> paste this file -> Deploy -> New deployment -> Web app
 * 5. Execute as: Me | Who has access: Anyone
 * 6. Copy the web app URL into GOOGLE_SHEETS_WEB_APP_URL in .env.local
 */

function getISTTimestamp() {
  return Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy, HH:mm:ss") + " IST";
}

function doPost(e) {
  try {
    const params = e.parameter;
    const sheetName = params.sheet === "waitlist" ? "Waitlist" : "Newsletter";
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Sheet not found: " + sheetName })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (sheetName === "Waitlist") {
      sheet.appendRow([
        params.timestamp || getISTTimestamp(),
        params.name || "",
        params.email || "",
        params.phone || "",
        params.city || "",
      ]);
    } else {
      sheet.appendRow([
        params.timestamp || getISTTimestamp(),
        params.email || "",
      ]);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
