// ─────────────────────────────────────────────────────────────────────────────
// app/swag/page.tsx
// DevFest Port Harcourt 2026 Swag & Merchandise Store Page
// ─────────────────────────────────────────────────────────────────────────────

import { Suspense } from "react";
import type { Metadata } from "next";
import SwagStoreView from "@/components/swag/SwagStoreView";

export const metadata: Metadata = {
  title: "Official Swag Store",
  description:
    "Official DevFest Port Harcourt 2026 merchandise — exclusive hoodies, t-shirts, caps, stickers, and swag bags.",
  alternates: {
    canonical: "/swag",
  },
};

export default function SwagStorePage() {
  return (
    <div className="bg-[#FAF7EE] text-black min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 w-full font-sans">
      <div className="max-w-6xl mx-auto">
        <Suspense
          fallback={
            <div className="text-center py-24 space-y-4">
              <div className="w-12 h-12 border-4 border-black border-t-[#F5B82A] rounded-full animate-spin mx-auto" />
              <p className="font-akira text-sm uppercase text-gray-600">
                Loading DevFest Swag Store...
              </p>
            </div>
          }
        >
          <SwagStoreView />
        </Suspense>
      </div>
    </div>
  );
}

