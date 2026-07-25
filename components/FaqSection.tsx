// ─────────────────────────────────────────────────────────────────────────────
// components/FaqSection.tsx
// Home Page FAQ Section modeled exactly after 2025.devfestlagos.com
// Placed directly above the footer area
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/data/faqs";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  // Top 4 FAQs for the homepage matching 2025.devfestlagos.com
  const homeFaqs = faqs.slice(0, 4);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#18181B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-black/10">
      {/* ── Inner White Card Container ───────────────────────────────────── */}
      <div className="relative bg-white text-black rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-14 lg:p-16 max-w-5xl mx-auto shadow-2xl border border-black/10">
        {/* ── Community Badge Sticker (Top-Left Edge) ───────────────────── */}
        <div className="absolute -top-8 -left-4 sm:-top-10 sm:-left-8 z-10 pointer-events-none">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-rose-500 p-1 flex items-center justify-center relative shadow-xl rotate-[-10deg]">
            <svg className="w-full h-full animate-[spin_18s_linear_infinite]" viewBox="0 0 100 100">
              <path
                id="faqHomeBadgePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] font-black fill-white tracking-widest uppercase">
                <textPath href="#faqHomeBadgePath" startOffset="0%">
                  MORE COMMUNITY LESS EGO •
                </textPath>
              </text>
            </svg>

            {/* Center Community Avatar Stamp */}
            <div className="absolute inset-0 m-auto w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-black overflow-hidden shadow-inner flex items-center justify-center">
              <img
                src="https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp"
                alt="GDG Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[0.95]">
            GET YOUR
            <br />
            QUESTIONS
            <br />
            ANSWERED
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base text-center mt-3 max-w-xl mx-auto">
            From registration to what to expect on the day, our FAQs have all the info you need.
          </p>
        </div>

        {/* ── Speech-Bubble FAQ Accordion List (4 items) ────────────────── */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {homeFaqs.map((item, index) => {
            const isOpen = openId === item.id;
            const num = index + 1;

            return (
              <div key={item.id} className="relative group">
                {/* Speech Bubble Pill Card */}
                <div
                  className={`bg-[#FDF4CE] hover:bg-[#FDEEAA] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-black/10 transition-all duration-200 ${
                    isOpen ? "bg-[#FDEEAA] shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    id={`home-faq-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-panel-${item.id}`}
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-bold text-black font-sans text-base sm:text-lg leading-snug">
                      {num}. {item.question}
                    </span>
                    <span
                      className="shrink-0 w-8 h-8 rounded-xl bg-white flex items-center justify-center text-xl font-extrabold text-black transition-transform duration-200 shadow-sm border border-black/5"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    id={`home-faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`home-faq-btn-${item.id}`}
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] mt-3 pt-3 border-t border-black/10" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Speech bubble tail pointer at bottom right */}
                <div className="absolute -bottom-2 right-12 w-4 h-4 bg-[#FDF4CE] group-hover:bg-[#FDEEAA] rotate-45 border-r border-b border-black/10 transition-colors pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA Button: "I HAVE MORE QUESTIONS" ───────────────── */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            href="/faqs"
            className="inline-flex items-center px-8 sm:px-10 py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 sm:border-[3px] border-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-md cursor-pointer"
            id="home-i-have-more-questions"
          >
            I HAVE MORE QUESTIONS
          </Link>
        </div>
      </div>
    </section>
  );
}
