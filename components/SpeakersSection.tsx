// ─────────────────────────────────────────────────────────────────────────────
// components/SpeakersSection.tsx
// Client component — Day filter & speaker cards grid for 2025.devfestlagos.com/speakers
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { Speaker } from "@/lib/types";
import SpeakerCard from "@/components/SpeakerCard";

interface SpeakersSectionProps {
  speakers: Speaker[];
}

const DAY_PILLS = [
  { label: "ALL", value: "all" },
  { label: "AUG 31", value: 1 },
  { label: "SEP 01", value: 2 },
  { label: "OCT 01", value: 3 },
  { label: "NOV 01", value: 4 },
  { label: "DEC 01", value: 5 },
];

export default function SpeakersSection({ speakers }: SpeakersSectionProps) {
  const [activeDay, setActiveDay] = useState<string | number>("all");

  return (
    <section className="w-full">
      {/* ── Heading ────────────────────────────────────────────────────── */}
      <h1 className="font-akira font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-8 sm:mb-10">
        MEET OUR 2026
        <br />
        SPEAKERS
      </h1>

      {/* ── Day Filter Pills ───────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
        {DAY_PILLS.map((pill) => {
          const isActive = activeDay === pill.value;
          return (
            <button
              key={pill.label}
              onClick={() => setActiveDay(pill.value)}
              className={`font-akira font-black text-xs sm:text-sm px-7 sm:px-9 py-3 rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer ${isActive
                ? "bg-[#F5B82A] text-black shadow-md scale-105"
                : "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5"
                }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* ── Speakers Grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={speaker.id} speaker={speaker} colorIndex={index} />
        ))}
      </div>
    </section>
  );
}
