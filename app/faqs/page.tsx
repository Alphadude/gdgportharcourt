// ─────────────────────────────────────────────────────────────────────────────
// app/faqs/page.tsx
// FAQs page — matching 2025.devfestlagos.com/faqs exact design pattern
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about DevFest Port Harcourt 2026 — tickets, venue, schedule, sponsorship, and more.",
};

export default function FaqsPage() {
  return (
    <div className="bg-[#FAF7EE] text-black min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 w-full font-sans">
      <div className="max-w-5xl mx-auto">
        {/* ── Page Header Section ────────────────────────────────────────── */}
        <div className="text-center flex flex-col items-center mb-8">
          {/* Community Badge Sticker ("MORE COMMUNITY LESS EGO") */}
          <div className="relative mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-rose-500 p-1 flex items-center justify-center relative shadow-md rotate-[-6deg]">
              <svg className="w-full h-full animate-[spin_16s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="faqBadgePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] font-black fill-white tracking-widest uppercase">
                  <textPath href="#faqBadgePath" startOffset="0%">
                    MORE COMMUNITY LESS EGO •
                  </textPath>
                </text>
              </svg>

              {/* Center Community Avatar Stamp */}
              <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-black overflow-hidden shadow-inner flex items-center justify-center">
                <img
                  src="https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp"
                  alt="GDG Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-none max-w-4xl">
            GET YOUR QUESTIONS ANSWERED
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 font-medium text-sm sm:text-base text-center mt-4 max-w-xl">
            From registration to what to expect on the day, our FAQs have all the info you need.
          </p>
        </div>

        {/* ── FAQ Accordion (Client Component with category switcher) ───── */}
        <FaqAccordion items={faqs} />
      </div>
    </div>
  );
}
