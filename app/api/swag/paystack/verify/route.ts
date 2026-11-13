// ─────────────────────────────────────────────────────────────────────────────
// app/api/swag/paystack/verify/route.ts
// Server-side Paystack transaction verification endpoint
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";
import { recordSwagOrderToGoogleSheet } from "@/lib/services/ordersSheet";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { error: "Missing reference parameter" },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Paystack secret key is not configured on the server.",
        },
        { status: 500 }
      );
    }

    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await paystackRes.json();

    if (!paystackRes.ok || !data.status) {
      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to verify transaction with Paystack.",
        },
        { status: 400 }
      );
    }

    const tx = data.data;

    if (tx.status === "success") {
      const meta = tx.metadata || {};
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
        `${tx.customer?.first_name || ""} ${tx.customer?.last_name || ""}`.trim() ||
        "DevFest Attendee";

      const customerPhone =
        meta.customer_phone ||
        getField("phone_number") ||
        tx.customer?.phone ||
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

      // Record to Google Sheet (non-blocking for fast UI response)
      recordSwagOrderToGoogleSheet({
        orderReference: meta.order_reference || tx.reference,
        paystackReference: tx.reference,
        customerName,
        email: tx.customer?.email || meta.customer_email || "",
        phone: customerPhone,
        itemsSummary,
        sizes,
        colors,
        amountNGN: tx.amount / 100,
        paidAt: tx.paid_at,
        paymentChannel: tx.channel,
      }).catch((err) => {
        console.error("[Verify] Non-blocking Google Sheet write failure:", err);
      });
    }

    return NextResponse.json({
      success: true,
      status: tx.status, // "success", "failed", "abandoned"
      reference: tx.reference,
      amountNGN: tx.amount / 100,
      paidAt: tx.paid_at,
      channel: tx.channel,
      currency: tx.currency,
      customer: tx.customer,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

