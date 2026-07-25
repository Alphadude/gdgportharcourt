// ─────────────────────────────────────────────────────────────────────────────
// components/SpeakersCarousel.tsx
// Interactive horizontal scroll carousel for featured speakers on the homepage
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useRef } from "react";
import Link from "next/link";
import { Speaker } from "@/lib/types";
import SpeakerCard from "@/components/SpeakerCard";

interface SpeakersCarouselProps {
  speakers: Speaker[];
}

export default function SpeakersCarousel({ speakers }: SpeakersCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
      {/* ── Section Header with Navigation Arrows ──────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-google-blue text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            World Class Keynotes
          </p>
          <h2 className="font-akira font-black text-3xl sm:text-5xl text-black tracking-tight uppercase leading-none">
            FEATURED SPEAKERS
          </h2>
        </div>

        {/* Carousel Navigation & View All */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll speakers left"
            className="w-11 h-11 rounded-full bg-white border-2 border-black text-black flex items-center justify-center font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-sm cursor-pointer"
          >
            ←
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll speakers right"
            className="w-11 h-11 rounded-full bg-white border-2 border-black text-black flex items-center justify-center font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-sm cursor-pointer"
          >
            →
          </button>

          <Link
            href="/speakers"
            className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-akira font-extrabold text-xs uppercase tracking-wider hover:bg-gray-800 transition-all hover:scale-105 shrink-0"
            id="home-view-all-speakers"
          >
            VIEW ALL SPEAKERS →
          </Link>
        </div>
      </div>

      {/* ── Horizontal Scrollable Cards Track ──────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 scrollbar-none no-scrollbar"
      >
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0 snap-start"
          >
            <SpeakerCard speaker={speaker} colorIndex={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
