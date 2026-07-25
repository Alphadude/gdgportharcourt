// ─────────────────────────────────────────────────────────────────────────────
// components/SpeakerCard.tsx
// Speaker card matching official 2025.devfestlagos.com/speakers design pattern
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { Speaker } from "@/lib/types";

interface SpeakerCardProps {
  speaker: Speaker;
  colorIndex?: number;
}

// Pastel background palette for portrait frames
const PASTEL_BG_COLORS = [
  "bg-[#FDF4CE]", // Warm Yellow
  "bg-[#DCFCE7]", // Mint Green
  "bg-[#D0F2FE]", // Sky Blue
  "bg-[#FEF08A]", // Soft Yellow
  "bg-[#FCE7F3]", // Soft Pink
  "bg-[#CFFAFE]", // Light Cyan
  "bg-[#FFE4E6]", // Light Rose
  "bg-[#E0E7FF]", // Light Indigo
];

export default function SpeakerCard({ speaker, colorIndex = 0 }: SpeakerCardProps) {
  const [flipped, setFlipped] = useState(false);
  const bgColor = PASTEL_BG_COLORS[colorIndex % PASTEL_BG_COLORS.length];

  return (
    <article
      onClick={() => setFlipped(!flipped)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/10 flex flex-col justify-between cursor-pointer group hover:scale-[1.02] transition-all duration-300 min-h-[360px] relative"
    >
      {!flipped ? (
        /* Front View — Cutout Portrait Photo on Pastel Background */
        <div className="flex flex-col h-full justify-between">
          {/* Top Pastel Photo Container */}
          <div className={`relative aspect-[4/4.5] w-full overflow-hidden ${bgColor} p-3 flex items-end justify-center`}>
            <img
              src={speaker.imageUrl}
              alt={speaker.name}
              className="w-full h-full object-cover object-top rounded-t-xl group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Bottom White Info Box */}
          <div className="p-4 sm:p-5 bg-white border-t border-black/5 flex-1 flex flex-col justify-center">
            <h3 className="font-akira font-black text-sm sm:text-base text-black uppercase tracking-tight leading-tight">
              {speaker.name}
            </h3>
            <p className="text-xs font-sans text-gray-700 font-medium truncate mt-1">
              {speaker.title} {speaker.company ? `— ${speaker.company}` : ""}
            </p>
          </div>
        </div>
      ) : (
        /* Back View — Detailed Bio & Socials */
        <div className="p-5 sm:p-6 bg-white flex flex-col justify-between h-full relative">
          {/* Top Accent Strip */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#3B82F6]" />

          <div>
            <h3 className="font-akira font-black text-base text-black uppercase tracking-tight leading-tight mb-1 mt-1">
              {speaker.name}
            </h3>
            <p className="text-xs font-sans text-gray-600 font-semibold mb-3">
              {speaker.title} {speaker.company ? `at ${speaker.company}` : ""}
            </p>

            <p className="text-xs font-sans text-gray-700 leading-relaxed font-medium line-clamp-6">
              {speaker.bio ||
                `${speaker.name} is a speaker sharing insights on ${
                  speaker.tags?.join(", ") || "technology"
                } at DevFest Port Harcourt 2026.`}
            </p>
          </div>

          {/* Social Icons at Bottom */}
          <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
            {speaker.twitter && (
              <a
                href={`https://twitter.com/${speaker.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center text-xs hover:bg-gray-800 transition-colors"
                aria-label={`${speaker.name} on X`}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {speaker.linkedin && (
              <a
                href={`https://linkedin.com/in/${speaker.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center text-xs hover:bg-gray-800 transition-colors"
                aria-label={`${speaker.name} on LinkedIn`}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
