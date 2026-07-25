// ─────────────────────────────────────────────────────────────────────────────
// app/dp-generator/page.tsx
// DevFest Port Harcourt 2026 Display Picture (DP) Generator Page
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import DpGenerator from "@/components/DpGenerator";

export const metadata: Metadata = {
  title: "DP Generator",
  description:
    "Generate your official DevFest Port Harcourt 2026 Display Picture (DP) and share your custom frame with the community!",
};

export default function DpGeneratorPage() {
  return (
    <div className="bg-[#FAF7EE] text-black min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 w-full font-sans">
      <div className="max-w-6xl mx-auto">
        {/* ── Page Header Section ────────────────────────────────────────── */}
        <div className="text-center flex flex-col items-center mb-12">
          <p className="text-google-blue text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            OFFICIAL PROFILE BADGE
          </p>

          <h1 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-none max-w-4xl">
            GENERATE YOUR DEVFEST DP
          </h1>

          <p className="text-gray-600 font-medium text-sm sm:text-base text-center mt-4 max-w-xl">
            Upload your photo, add your name and track, customize your color badge, and share your excitement for DevFest Port Harcourt 2026!
          </p>
        </div>

        {/* ── Interactive DP Generator Client Component ─────────────────── */}
        <DpGenerator />
      </div>
    </div>
  );
}
