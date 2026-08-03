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
  { label: "AUG 21", value: 1 },
  { label: "SEP 25", value: 2 },
  { label: "OCT 23", value: 3 },
  { label: "NOV 28", value: 4 },
  { label: "DEC 11", value: 5 },
];

export default function SpeakersSection({ speakers }: SpeakersSectionProps) {
  const [activeDay, setActiveDay] = useState<string | number>("all");

  const filteredSpeakers =
    activeDay === "all"
      ? speakers
      : speakers.filter((s) => s.day === activeDay);

  return (
    <section className="w-full">
      {/* ── Header with Title and Apply as Speaker CTA ───────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#FBBC04] text-xs font-bold uppercase tracking-wider mb-4">
            🎤 Call For Proposals Open
          </span>
          <h1 className="font-akira font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95]">
            MEET OUR 2026
            <br />
            SPEAKERS
          </h1>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://docs.google.com/presentation/d/13uvnh9dXp1mFqMYBSD5WD7YOd-g7aCHlcYfEjnV03OM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-google-blue hover:bg-blue-600 text-white font-akira font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-lg border-2 border-white/20 hover:border-white"
            id="apply-as-speaker-btn"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            APPLY AS A SPEAKER
          </a>
        </div>
      </div>

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
      {filteredSpeakers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredSpeakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} colorIndex={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white/5 rounded-3xl border border-white/10">
          <p className="font-akira text-lg text-gray-400 mb-4">
            NO SPEAKERS ANNOUNCED FOR THIS DAY YET
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Stay tuned or apply to speak on this track!
          </p>
          <a
            href="https://docs.google.com/presentation/d/13uvnh9dXp1mFqMYBSD5WD7YOd-g7aCHlcYfEjnV03OM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5B82A] text-black font-akira font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-transform hover:scale-105"
          >
            APPLY AS A SPEAKER →
          </a>
        </div>
      )}

      {/* ── Bottom Call For Speakers Banner ────────────────────────────── */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-google-blue/20 via-white/5 to-google-green/20 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-xl">
          <h3 className="font-akira font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
            HAVE A TOPIC TO SHARE?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We are welcoming speakers across AI, Web, Mobile, Cloud, Design, Security, and Startup leadership. Join our world-class speaker lineup.
          </p>
        </div>
        <a
          href="https://docs.google.com/presentation/d/13uvnh9dXp1mFqMYBSD5WD7YOd-g7aCHlcYfEjnV03OM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F5B82A] hover:bg-yellow-400 text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-xl border-2 border-black shrink-0"
        >
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          APPLY AS A SPEAKER
        </a>
      </div>
    </section>
  );
}
