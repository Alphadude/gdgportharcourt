// ─────────────────────────────────────────────────────────────────────────────
// components/swag/SwagCheckoutModal.tsx
// Checkout & Paystack Payment modal for DevFest Port Harcourt Swag Orders
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem, CustomerDetails, SwagOrder } from "@/lib/types/swag";

interface SwagCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (order: SwagOrder) => void;
}

export default function SwagCheckoutModal({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}: SwagCheckoutModalProps) {
  const router = useRouter();
  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "pickup">("paystack");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalAmountNGN = items.reduce(
    (sum, item) => sum + item.priceNGN * item.quantity,
    0
  );

  const publicKey =
    process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ||
    "pk_test_2ba1958988afd6c6efdbf9018f29fbe200b67f76";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!customer.fullName.trim() || !customer.email.trim() || !customer.phone.trim()) {
      setErrorMessage("Please fill in your name, email, and phone number.");
      return;
    }

    setIsSubmitting(true);

    // Generate unique Order Reference (timestamp-based to guarantee uniqueness in Paystack)
    const uniqueSuffix = `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`.toUpperCase();
    const orderRef = `DFPH-SWAG-${uniqueSuffix}`;

    const baseOrder: SwagOrder = {
      orderReference: orderRef,
      createdAt: new Date().toISOString(),
      customer,
      items,
      totalAmountNGN,
      paymentMethod,
      paymentStatus: paymentMethod === "paystack" ? "awaiting_verification" : "pending_pickup",
    };

    // If Attendee chose Reserve & Pay on Event Day Pickup
    if (paymentMethod === "pickup") {
      try {
        if (typeof window !== "undefined") {
          const existing = JSON.parse(
            localStorage.getItem("devfest_swag_orders") || "[]"
          );
          localStorage.setItem(
            "devfest_swag_orders",
            JSON.stringify([baseOrder, ...existing])
          );
          sessionStorage.setItem("latest_devfest_order", JSON.stringify(baseOrder));
        }

        onOrderSuccess(baseOrder);
        router.push(`/swag/success?ref=${orderRef}`);
      } catch {
        setErrorMessage("Failed to process reservation. Please try again.");
        setIsSubmitting(false);
      }
      return;
    }

    // Paystack Online Payment Flow via direct official checkout redirect
    try {
      const initRes = await fetch("/api/swag/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          items,
          totalAmountNGN,
          orderReference: orderRef,
        }),
      });

      const initData = await initRes.json();

      if (initData.success && initData.authorizationUrl) {
        if (typeof window !== "undefined") {
          const existing = JSON.parse(
            localStorage.getItem("devfest_swag_orders") || "[]"
          );
          localStorage.setItem(
            "devfest_swag_orders",
            JSON.stringify([baseOrder, ...existing])
          );
          sessionStorage.setItem(
            "latest_devfest_order",
            JSON.stringify(baseOrder)
          );
          // Redirect directly to Paystack's official checkout page (works on all devices, Safari & Chrome)
          window.location.href = initData.authorizationUrl;
        }
      } else {
        setErrorMessage(
          initData.error || "Unable to launch Paystack checkout. Please try again."
        );
        setIsSubmitting(false);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Payment error";
      setErrorMessage(msg);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-xl bg-[#1F1F23] border-2 border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F5B82A]/10 border border-[#F5B82A]/30 text-[#F5B82A] text-[10px] font-akira font-black uppercase tracking-wider">
              Secure Swag Checkout
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Paystack Protected
            </span>
          </div>

          <h3 className="font-akira font-black text-xl sm:text-2xl text-white tracking-tight uppercase leading-snug">
            COMPLETE YOUR ORDER
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">
            Pick up your swags at the official DevFest Port Harcourt merchandise desk.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-bold">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Order Summary Pill */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-gray-300">
              <span>Items in Order:</span>
              <span className="text-white">
                {items.reduce((s, i) => s + i.quantity, 0)} item(s)
              </span>
            </div>
            <div className="flex justify-between items-center text-sm font-black text-white pt-2 border-t border-white/10">
              <span className="font-akira">AMOUNT DUE:</span>
              <span className="font-akira text-[#F5B82A] text-lg">
                ₦{totalAmountNGN.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Attendee Details */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-akira font-bold uppercase text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={customer.fullName}
                onChange={(e) =>
                  setCustomer({ ...customer, fullName: e.target.value })
                }
                placeholder="e.g. Tamara Briggs"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F5B82A] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-akira font-bold uppercase text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) =>
                    setCustomer({ ...customer, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F5B82A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-akira font-bold uppercase text-gray-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                  placeholder="+234 801 234 5678"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F5B82A] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-akira font-bold uppercase text-gray-300 mb-1">
                Pickup Notes (Optional)
              </label>
              <input
                type="text"
                value={customer.notes || ""}
                onChange={(e) =>
                  setCustomer({ ...customer, notes: e.target.value })
                }
                placeholder="e.g. Will pick up during morning keynote, or colleague collecting"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#F5B82A] transition-colors"
              />
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="pt-2">
            <label className="block text-xs font-akira font-bold uppercase text-gray-300 mb-2">
              Payment Preference
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod("paystack")}
                className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === "paystack"
                    ? "border-[#F5B82A] bg-[#F5B82A]/10 text-white"
                    : "border-white/10 bg-black/30 text-gray-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-akira font-bold text-xs text-white">
                    PAY WITH PAYSTACK
                  </span>
                  <span className="text-sm">💳</span>
                </div>
                <p className="text-[11px] leading-tight">
                  Instant secure checkout with Debit Card, Bank Transfer, or USSD.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("pickup")}
                className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === "pickup"
                    ? "border-[#F5B82A] bg-[#F5B82A]/10 text-white"
                    : "border-white/10 bg-black/30 text-gray-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-akira font-bold text-xs text-white">
                    PAY ON EVENT PICKUP
                  </span>
                  <span className="text-sm">📍</span>
                </div>
                <p className="text-[11px] leading-tight">
                  Reserve size now, pay via Cash, POS, or Transfer at the venue desk.
                </p>
              </button>
            </div>
          </div>

          {/* Paystack Badges & Security */}
          {paymentMethod === "paystack" && (
            <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <span>🔒</span>
                <span>256-bit SSL Encrypted by Paystack</span>
              </span>
              <span className="font-bold text-white text-[11px]">
                Test Mode Active
              </span>
            </div>
          )}

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.01] shadow-xl text-center cursor-pointer disabled:opacity-50"
            >
              {isSubmitting
                ? "LAUNCHING PAYSTACK..."
                : paymentMethod === "paystack"
                ? `PAY ₦${totalAmountNGN.toLocaleString()} WITH PAYSTACK →`
                : `CONFIRM RESERVATION & GET PASS →`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
