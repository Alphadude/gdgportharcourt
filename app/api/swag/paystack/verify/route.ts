// ─────────────────────────────────────────────────────────────────────────────
// app/api/swag/paystack/verify/route.ts
// Server-side Paystack transaction verification endpoint
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";

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

