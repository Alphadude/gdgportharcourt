// ─────────────────────────────────────────────────────────────────────────────
// components/swag/SwagHero.tsx
// Header banner for the DevFest Port Harcourt 2026 Swag Store
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import Link from "next/link";
import { SwagCategory } from "@/lib/types/swag";

interface SwagHeroProps {
  selectedCategory: "all" | SwagCategory;
  onSelectCategory: (cat: "all" | SwagCategory) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function SwagHero({
  selectedCategory,
  onSelectCategory,
  cartCount,
  onOpenCart,
}: SwagHeroProps) {
  const categories: Array<{ id: "all" | SwagCategory; label: string }> = [
    { id: "all", label: "ALL MERCHANDISE" },
    { id: "apparel", label: "APPAREL & HOODIES" },
    { id: "accessory", label: "ACCESSORIES & GEAR" },
  ];

  return (
    <div className="w-full relative">
      {/* ── Top Capsule & Cart Floating Bar ───────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-akira font-bold text-gray-700 hover:text-black uppercase tracking-wider bg-white/80 hover:bg-white px-4 py-2 rounded-full border border-black/10 shadow-sm transition-all"
        >
          <span>←</span>
          <span>BACK TO HOMEPAGE</span>
        </Link>

        {/* Floating Cart Button */}
        <button
          type="button"
          onClick={onOpenCart}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 font-akira text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all border-2 border-black cursor-pointer"
        >
          <span>🛒</span>
          <span>BAG</span>
          <span className="w-5 h-5 rounded-full bg-[#F5B82A] text-black font-black text-[11px] flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>

      {/* ── Big Typography & Tagline ───────────────────────────────────────── */}
      <div className="text-center flex flex-col items-center mb-10">
        {/* Comic Tag Sticker */}
        <div className="relative mb-4 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-gradient-to-r from-google-blue via-google-red to-google-yellow text-white font-akira font-black text-xs uppercase tracking-wider border-2 border-black shadow-md">
            Official 2026 Merch Drop
          </span>
        </div>

        <h1 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[0.95] max-w-4xl">
          DEVFEST PORT HARCOURT
          <br />
          <span className="text-google-blue">SWAG STORE</span>
        </h1>

        <p className="text-gray-700 font-sans text-sm sm:text-base text-center mt-5 max-w-2xl font-medium leading-relaxed">
          Level up your wardrobe with limited-edition DevFest Port Harcourt merchandise.
          <strong className="text-black font-bold block mt-1">
            Event admission is 100% free! Swag packages and items are optional.
          </strong>
        </p>
      </div>

      {/* ── Category Filter Tabs ───────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-akira font-bold text-xs uppercase tracking-wider transition-all border-2 ${
                isActive
                  ? "bg-black text-[#F5B82A] border-black shadow-md scale-105"
                  : "bg-white text-gray-800 border-black/15 hover:border-black hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

