// ─────────────────────────────────────────────────────────────────────────────
// components/swag/SwagSuccessView.tsx
// Order Confirmation & Digital Pickup Pass for DevFest Swag Orders
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SwagOrder } from "@/lib/types/swag";

export default function SwagSuccessView() {
  const searchParams = useSearchParams();
  const orderRefParam = searchParams.get("ref");
  const paystackRefParam = searchParams.get("paystack_ref") || searchParams.get("reference");

  const [order, setOrder] = useState<SwagOrder | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let currentOrder: SwagOrder | null = null;

      const stored = sessionStorage.getItem("latest_devfest_order");
      if (stored) {
        try {
          currentOrder = JSON.parse(stored);
        } catch {
          // fallback
        }
      }

      if (!currentOrder) {
        const orders: SwagOrder[] = JSON.parse(
          localStorage.getItem("devfest_swag_orders") || "[]"
        );
        if (orders.length > 0) {
          if (orderRefParam) {
            currentOrder =
              orders.find((o) => o.orderReference === orderRefParam) || orders[0];
          } else {
            currentOrder = orders[0];
          }
        }
      }

      // If returning from Paystack with a reference, verify on server
      if (paystackRefParam) {
        setIsVerifying(true);
        fetch(
          `/api/swag/paystack/verify?reference=${encodeURIComponent(
            paystackRefParam
          )}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success && data.status === "success") {
              if (currentOrder) {
                const updated: SwagOrder = {
                  ...currentOrder,
                  paymentStatus: "paid",
                  paystackReference: paystackRefParam,
                  paidAt: data.paidAt || new Date().toISOString(),
                };
                setOrder(updated);
                sessionStorage.setItem(
                  "latest_devfest_order",
                  JSON.stringify(updated)
                );
              }
            }
          })
          .catch(() => {
            // fallback
          })
          .finally(() => {
            setIsVerifying(false);
          });
      }

      setOrder(currentOrder);
    }
  }, [orderRefParam, paystackRefParam]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const refToDisplay =
    order?.orderReference || orderRefParam || "DFPH-SWAG-7712";
  const isPaid =
    order?.paymentStatus === "paid" || Boolean(paystackRefParam);

  return (
    <div className="max-w-2xl mx-auto">
      {/* ── Success Celebration Tag ────────────────────────────────────────── */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border-2 border-emerald-500 shadow-md">
          ✓
        </div>
        <h1 className="font-akira font-black text-2xl sm:text-4xl text-black uppercase tracking-tight leading-snug">
          {isPaid ? "SWAG PAYMENT SUCCESSFUL!" : "SWAG RESERVATION CONFIRMED!"}
        </h1>
        <p className="text-gray-700 font-medium text-sm sm:text-base mt-2">
          {isPaid
            ? "Your payment was processed securely via Paystack. Your official digital pickup pass is ready."
            : "Your merchandise has been reserved. Complete payment at the event pickup desk."}
        </p>
      </div>

      {/* ── Official Digital Pickup Pass Card ──────────────────────────────── */}
      <div
        id="digital-pickup-pass"
        className="bg-[#18181B] text-white rounded-3xl p-6 sm:p-10 border-4 border-black shadow-2xl relative overflow-hidden mb-8"
      >
        {/* Top Decorative bar */}
        <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-google-blue via-google-red to-google-yellow" />

        {/* Pass Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <p className="text-[10px] font-akira text-[#F5B82A] uppercase tracking-widest">
              OFFICIAL PICKUP PASS
            </p>
            <h2 className="font-akira font-black text-lg sm:text-xl text-white uppercase tracking-tight">
              DEVFEST PORT HARCOURT 2026
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-akira font-bold text-gray-300">
              28 NOV 2026
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-akira font-black uppercase ${
                isPaid
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
              }`}
            >
              {isPaid ? "PAID" : "RESERVED"}
            </span>
          </div>
        </div>

        {/* Order Reference Badge */}
        <div className="my-6 bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              ORDER REFERENCE
            </p>
            <p className="font-akira font-black text-2xl sm:text-3xl text-[#F5B82A] tracking-wider mt-1">
              {refToDisplay}
            </p>
            {paystackRefParam && (
              <p className="text-[11px] text-gray-400 mt-1 font-mono">
                Paystack Ref: {paystackRefParam}
              </p>
            )}
          </div>
          <div className="shrink-0 bg-white p-2.5 rounded-xl border-2 border-black">
            {/* Visual Barcode Pattern */}
            <div className="flex items-center gap-1 h-12">
              <div className="w-1.5 h-full bg-black" />
              <div className="w-1 h-full bg-black" />
              <div className="w-2.5 h-full bg-black" />
              <div className="w-1 h-full bg-black" />
              <div className="w-3 h-full bg-black" />
              <div className="w-1.5 h-full bg-black" />
              <div className="w-1 h-full bg-black" />
              <div className="w-2 h-full bg-black" />
            </div>
          </div>
        </div>

        {/* Customer & Item Details */}
        <div className="space-y-4 text-sm border-b border-white/10 pb-6 mb-6">
          {order?.customer && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400 block font-medium">Attendee Name:</span>
                <span className="text-white font-bold">{order.customer.fullName}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Contact:</span>
                <span className="text-white font-bold">
                  {order.customer.email} • {order.customer.phone}
                </span>
              </div>
            </div>
          )}

          {/* Items breakdown */}
          <div>
            <p className="text-xs font-akira font-bold uppercase text-gray-400 mb-2">
              Confirmed Merchandise:
            </p>
            {order?.items && order.items.length > 0 ? (
              <div className="space-y-2">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-xs py-1.5 border-b border-white/5"
                  >
                    <span className="font-bold text-gray-200">
                      {item.quantity}x {item.name}{" "}
                      {[item.color, item.size].filter(Boolean).length > 0 &&
                        `(${[item.color, item.size].filter(Boolean).join(" / ")})`}
                    </span>
                    <span className="font-akira text-gray-300">
                      ₦{(item.priceNGN * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-gray-300">
                1x DevFest Merchandise Bundle
              </div>
            )}
          </div>

          {/* Total Amount & Status */}
          <div className="flex justify-between items-center pt-2 text-sm font-bold">
            <div>
              <span className="font-akira text-gray-300 block text-xs">TOTAL:</span>
              <span className="text-xs font-medium text-gray-400">
                {isPaid ? "Payment Verified via Paystack" : "Pay at Swag Collection Desk"}
              </span>
            </div>
            <span className="font-akira text-xl text-[#F5B82A]">
              ₦{(order?.totalAmountNGN || 12000).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Pickup Location Notes */}
        <div className="bg-[#242428] rounded-2xl p-4 border border-white/10 space-y-1">
          <p className="text-xs font-akira font-bold text-[#F5B82A] uppercase flex items-center gap-2">
            <span>📍</span>
            <span>EVENT-DAY COLLECTION DESK</span>
          </p>
          <p className="text-xs text-gray-300 font-medium leading-relaxed">
            Present this reference pass or barcode on your phone at the{" "}
            <strong className="text-white">DevFest Port Harcourt Swag Booth</strong> on{" "}
            <strong className="text-white">November 28th, 2026</strong>.
          </p>
        </div>
      </div>

      {/* ── Action Buttons ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          type="button"
          onClick={handlePrint}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 font-akira text-xs uppercase tracking-wider border-2 border-black transition-all shadow-md cursor-pointer hover:scale-105"
        >
          🖨️ PRINT / SAVE PASS
        </button>

        <Link
          href="/schedule"
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F5B82A] text-black hover:bg-yellow-400 font-akira text-xs font-black uppercase tracking-wider border-2 border-black transition-all shadow-md text-center hover:scale-105"
        >
          VIEW SCHEDULE →
        </Link>

        <Link
          href="/"
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black hover:bg-gray-100 font-akira text-xs uppercase tracking-wider border-2 border-black transition-all shadow-md text-center hover:scale-105"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
