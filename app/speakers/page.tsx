// ─────────────────────────────────────────────────────────────────────────────
// app/speakers/page.tsx
// Speakers page matching 2025.devfestlagos.com/speakers exact layout pattern
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import SpeakersSection from "@/components/SpeakersSection";
import { speakers } from "@/lib/data/speakers";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "Meet the expert speakers presenting at DevFest Port Harcourt 2026 — covering AI, Cloud, Mobile, Web, DevOps and more.",
};

export default function SpeakersPage() {
  return (
    <div className="bg-[#18181B] text-white min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full font-sans">
      <SpeakersSection speakers={speakers} />
    </div>
  );
}
