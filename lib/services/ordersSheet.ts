// ─────────────────────────────────────────────────────────────────────────────
// lib/services/ordersSheet.ts
// Service for pushing verified DevFest Swag Orders to Google Sheets
// ─────────────────────────────────────────────────────────────────────────────

export interface SwagOrderRecord {
  orderReference: string;
  paystackReference?: string;
  customerName: string;
  email: string;
  phone: string;
  itemsSummary: string;
  sizes?: string;
  colors?: string;
  amountNGN: number;
  paidAt?: string;
  paymentChannel?: string;
}

export async function recordSwagOrderToGoogleSheet(
  order: SwagOrderRecord
): Promise<{
  success: boolean;
  status?: string;
  error?: string;
}> {
  const webhookUrl = process.env.GOOGLE_SHEET_ORDERS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "[GoogleSheets] GOOGLE_SHEET_ORDERS_WEBHOOK_URL is not configured. Order not written to Google Sheet:",
      order.orderReference
    );
    return { success: false, error: "GOOGLE_SHEET_ORDERS_WEBHOOK_URL not configured" };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
      cache: "no-store",
    });

    const responseText = await res.text();
    let result: Record<string, unknown> = {};
    try {
      result = JSON.parse(responseText);
    } catch {
      result = { raw: responseText };
    }

    if (!res.ok) {
      console.error(
        "[GoogleSheets] Failed to record order to Google Sheet:",
        res.status,
        responseText
      );
      return { success: false, error: `HTTP ${res.status}: ${responseText}` };
    }

    console.log(
      "[GoogleSheets] Order recorded successfully:",
      order.orderReference,
      result
    );
    return {
      success: true,
      status: typeof result.status === "string" ? result.status : "success",
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(
      "[GoogleSheets] Error recording order to Google Sheet:",
      message
    );
    return { success: false, error: message };
  }
}
