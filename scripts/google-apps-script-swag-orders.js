/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DevFest Port Harcourt 2026 — Swag Orders Google Apps Script Webhook
 * ─────────────────────────────────────────────────────────────────────────────
 * How to setup:
 * 1. Open your Google Sheet for Swag Orders.
 * 2. Set Row 1 header columns:
 *    A: Timestamp
 *    B: Order Reference
 *    C: Paystack Reference
 *    D: Customer Name
 *    E: Email Address
 *    F: Phone Number
 *    G: Items Summary
 *    H: Size(s)
 *    I: Color(s)
 *    J: Amount Paid (NGN)
 *    K: Payment Status
 *    L: Pickup Status
 *    M: Payment Channel
 *    N: Notes / Collected By
 * 3. Go to Extensions > Apps Script in the Google Sheet menu.
 * 4. Paste this entire file into Code.gs.
 * 5. Click "Deploy" > "New deployment".
 * 6. Select Type: "Web app".
 *    - Description: "DevFest Swag Orders Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (crucial for receiving API POST requests)
 * 7. Click Deploy, Authorize access, and copy the Web App URL.
 * 8. Add this URL to your .env.local on the server:
 *    GOOGLE_SHEET_ORDERS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 * ─────────────────────────────────────────────────────────────────────────────
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const orderRef = (data.orderReference || "").trim();
    const paystackRef = (data.paystackReference || "").trim();

    // Idempotency: avoid appending duplicate rows for the same order
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existingData = sheet.getRange(2, 2, lastRow - 1, 2).getValues();
      for (let i = 0; i < existingData.length; i++) {
        const existingOrderRef = String(existingData[i][0] || "").trim();
        const existingPaystackRef = String(existingData[i][1] || "").trim();

        if (
          (orderRef && existingOrderRef === orderRef) ||
          (paystackRef && existingPaystackRef === paystackRef)
        ) {
          return ContentService.createTextOutput(
            JSON.stringify({
              status: "already_exists",
              message: "Order already recorded",
              orderReference: orderRef,
            })
          ).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    const row = [
      data.paidAt ? new Date(data.paidAt) : new Date(), // A: Timestamp
      orderRef,                                         // B: Order Reference
      paystackRef,                                      // C: Paystack Reference
      data.customerName || "",                          // D: Customer Name
      data.email || "",                                 // E: Email Address
      data.phone || "",                                 // F: Phone Number
      data.itemsSummary || "",                          // G: Items Summary
      data.sizes || "",                                 // H: Size(s)
      data.colors || "",                                // I: Color(s)
      data.amountNGN || 0,                              // J: Amount Paid (NGN)
      "PAID",                                           // K: Payment Status
      "Pending Pickup",                                 // L: Pickup Status
      data.paymentChannel || "card",                    // M: Payment Channel
      "",                                               // N: Notes / Collected By
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        orderReference: orderRef,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check GET endpoint for easy testing in browser
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "active",
      message: "DevFest Swag Orders Webhook is online.",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
