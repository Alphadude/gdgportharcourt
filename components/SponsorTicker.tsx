// ─────────────────────────────────────────────────────────────────────────────
// components/SponsorTicker.tsx
// Auto-scrolling infinite sponsor logo carousel using logos from /public/logo/
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { Sponsor } from "@/lib/types";

interface SponsorTickerProps {
  sponsors: Sponsor[];
}

export default function SponsorTicker({ sponsors }: SponsorTickerProps) {
  // Multiply items for smooth, continuous looping marquee
  const items = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-12 sm:py-16 overflow-hidden border-y border-black/10 bg-[#FAF7EE] w-full">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="font-akira text-xs sm:text-sm font-black uppercase tracking-widest text-gray-600">
          OUR PAST PARTNERS
        </p>
      </div>

      {/* Infinite Carousel track */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-r from-[#FAF7EE] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-l from-[#FAF7EE] to-transparent" />

        {/* Continuous Marquee Loop */}
        <div className="flex gap-12 sm:gap-20 items-center w-max animate-ticker hover:[animation-play-state:paused] py-2">
          {items.map((sponsor, idx) => (
            <a
              key={`${sponsor.id}-${idx}`}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sponsor.name}
              className="inline-flex items-center shrink-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 px-2"
            >
              <img
                src={sponsor.logoUrl}
                alt={sponsor.name}
                className="h-9 sm:h-14 w-auto max-w-[160px] sm:max-w-[220px] object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
