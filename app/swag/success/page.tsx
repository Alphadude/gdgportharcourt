// ─────────────────────────────────────────────────────────────────────────────
// app/swag/success/page.tsx
// Order Confirmation & Digital Pickup Pass Page
// ─────────────────────────────────────────────────────────────────────────────

import { Suspense } from "react";
import type { Metadata } from "next";
import SwagSuccessView from "@/components/swag/SwagSuccessView";

export const metadata: Metadata = {
  title: "Order Confirmed | Swag Store",
  description: "DevFest Port Harcourt 2026 official merchandise order confirmation and digital pickup pass.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SwagSuccessPage() {
  return (
    <div className="bg-[#FAF7EE] text-black min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 w-full font-sans">
      <Suspense
        fallback={
          <div className="text-center py-24 space-y-4">
            <div className="w-12 h-12 border-4 border-black border-t-[#F5B82A] rounded-full animate-spin mx-auto" />
            <p className="font-akira text-sm uppercase text-gray-600">
              Loading confirmation pass...
            </p>
          </div>
        }
      >
        <SwagSuccessView />
      </Suspense>
    </div>
  );
}

