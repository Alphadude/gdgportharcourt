// ─────────────────────────────────────────────────────────────────────────────
// components/FaqAccordion.tsx
// Speech-bubble styled FAQ accordion component matching 2025.devfestlagos.com/faqs
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const categories = Array.from(
    new Set(items.map((item) => item.category as "general" | "tickets" | undefined))
  ).filter((c): c is "general" | "tickets" => c !== undefined);

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] ?? "general"
  );
  const [openId, setOpenId] = useState<string | null>(null);

  // Filter items by active category if multiple categories exist
  const filteredItems =
    categories.length > 1
      ? items.filter((item) => (item.category ?? "general") === activeCategory)
      : items;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      {/* ── Category Filter Pills ───────────────────────────────────────── */}
      {categories.length > 1 && (
        <div className="flex justify-center items-center gap-3 sm:gap-4 my-8 sm:my-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null);
              }}
              className={`px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-akira font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border-2 border-black cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#F5B82A] text-black shadow-md scale-105"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ── Speech-Bubble FAQ Accordion List ─────────────────────────────── */}
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
        {filteredItems.map((item, index) => {
          const isOpen = openId === item.id;
          const num = index + 1;

          return (
            <div key={item.id} className="relative group">
              {/* Main Yellow Pill Card */}
              <div
                className={`bg-[#FDF4CE] hover:bg-[#FDEEAA] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-black/10 shadow-sm transition-all duration-200 ${
                  isOpen ? "shadow-md bg-[#FDEEAA]" : ""
                }`}
              >
                <button
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-bold text-gray-900 font-sans text-base sm:text-lg leading-snug">
                    {num}. {item.question}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xl font-extrabold text-black transition-transform duration-200"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer region */}
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
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

              {/* Speech bubble tail pointer */}
              <div className="absolute -bottom-2 right-12 w-4 h-4 bg-[#FDF4CE] group-hover:bg-[#FDEEAA] rotate-45 border-r border-b border-black/10 transition-colors pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
