// ─────────────────────────────────────────────────────────────────────────────
// app/api/swag/paystack/initialize/route.ts
// Server-side Paystack transaction initializer
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customer, items, totalAmountNGN, orderReference } = body;

    const secretKey =
      process.env.PAYSTACK_SECRET_KEY ||
      "sk_test_57feab6e4412a93d331ab1f83e62c41e21cc0325";

    if (!customer?.email || !totalAmountNGN) {
      return NextResponse.json(
        { error: "Missing required fields (email or totalAmountNGN)" },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";
    const callbackUrl = `${origin}/swag/success?ref=${orderReference}`;

    // Paystack requires amount in Kobo (1 NGN = 100 Kobo)
    const amountInKobo = Math.round(Number(totalAmountNGN) * 100);

    const paystackRes = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: customer.email,
          amount: amountInKobo,
          reference: orderReference,
          callback_url: callbackUrl,
          metadata: {
            custom_fields: [
              {
                display_name: "Customer Name",
                variable_name: "customer_name",
                value: customer.fullName,
              },
              {
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: customer.phone,
              },
              {
                display_name: "Order Items",
                variable_name: "order_items",
                value: items
                  ?.map(
                    (i: { name: string; size?: string; quantity: number }) =>
                      `${i.quantity}x ${i.name} ${i.size ? `(${i.size})` : ""}`
                  )
                  .join(", "),
              },
            ],
          },
        }),
      }
    );

    const data = await paystackRes.json();

    if (!paystackRes.ok || !data.status) {
      return NextResponse.json(
        {
          error:
            data.message ||
            "Unable to initialize transaction with Paystack.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      authorizationUrl: data.data.authorization_url,
      accessCode: data.data.access_code,
      reference: data.data.reference,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

