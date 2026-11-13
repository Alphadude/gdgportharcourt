// ─────────────────────────────────────────────────────────────────────────────
// app/api/swag/paystack/webhook/route.ts
// Server-to-server Paystack Webhook Handler
// Captures successful charges and appends customer order data to Google Sheets
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";
import crypto from "crypto";
import { recordSwagOrderToGoogleSheet } from "@/lib/services/ordersSheet";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      console.error("[Paystack Webhook] PAYSTACK_SECRET_KEY is not configured.");
      return NextResponse.json({ error: "Missing secret key" }, { status: 500 });
    }

    const signature = req.headers.get("x-paystack-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const rawBody = await req.text();
    const hash = crypto
      .createHmac("sha512", secretKey)
      .update(rawBody)
      .digest("hex");

    if (hash !== signature) {
      console.warn("[Paystack Webhook] Invalid signature match.");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    // Only process successful charges
    if (event.event === "charge.success") {
      const data = event.data;
      const meta = data.metadata || {};
      const customFields = Array.isArray(meta.custom_fields)
        ? meta.custom_fields
        : [];
      const getField = (name: string) =>
        customFields.find(
          (f: { variable_name: string; value: string }) => f.variable_name === name
        )?.value || "";

      const customerName =
        meta.customer_name ||
        getField("customer_name") ||
        `${data.customer?.first_name || ""} ${data.customer?.last_name || ""}`.trim() ||
        "DevFest Attendee";

      const customerPhone =
        meta.customer_phone ||
        getField("phone_number") ||
        data.customer?.phone ||
        "";

      const itemsSummary =
        meta.items_summary ||
        getField("order_items") ||
        (Array.isArray(meta.items)
          ? meta.items
              .map(
                (i: { name?: string; size?: string; color?: string; quantity?: number }) =>
                  `${i.quantity || 1}x ${i.name || "Item"}${
                    i.size ? ` (${i.size})` : ""
                  }${i.color ? ` [${i.color}]` : ""}`
              )
              .join(", ")
          : "DevFest Official Swag");

      const sizes =
        meta.sizes ||
        (Array.isArray(meta.items)
          ? meta.items
              .map((i: { size?: string }) => i.size)
              .filter(Boolean)
              .join(", ")
          : "");

      const colors =
        meta.colors ||
        (Array.isArray(meta.items)
          ? meta.items
              .map((i: { color?: string }) => i.color)
              .filter(Boolean)
              .join(", ")
          : "");

      console.log(
        `[Paystack Webhook] Processing charge.success for ref ${data.reference}`
      );

      await recordSwagOrderToGoogleSheet({
        orderReference: meta.order_reference || data.reference,
        paystackReference: data.reference,
        customerName,
        email: data.customer?.email || meta.customer_email || "",
        phone: customerPhone,
        itemsSummary,
        sizes,
        colors,
        amountNGN: data.amount / 100,
        paidAt: data.paid_at,
        paymentChannel: data.channel,
      });
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Error";
    console.error("[Paystack Webhook] Exception:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
