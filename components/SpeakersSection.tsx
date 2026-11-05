// ─────────────────────────────────────────────────────────────────────────────
// components/SpeakersSection.tsx
// Client component — Day filter & speaker cards grid for 2025.devfestlagos.com/speakers
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import Image from "next/image";
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

const KEYNOTE_DATA = {
  "ok-chinda": {
    name: "Hon. O.K. Chinda",
    badge: "Keynote Speaker · Special Guest",
    subBadge: "Legislative Leadership & Tech Growth",
    subBadgeColor: "bg-purple-500/20 border-purple-500/40 text-purple-300",
    role: "Minority Leader, House of Representatives · Obio/Akpor Constituency",
    image: "/speakers/ok-chinda.jpg",
    bgColor: "bg-[#DCFCE7]",
    bioParagraphs: [
      "Hon. Kingsley Ogundu Chinda (widely known as O.K. Chinda) is a leading Nigerian legislator, legal practitioner, and public policy leader. He represents the Obio/Akpor Federal Constituency of Rivers State in Nigeria's National Assembly, where he serves as the Minority Leader of the House of Representatives.",
      "Throughout his legislative career, Hon. Chinda has been an ardent champion for digital literacy, youth-driven economic modernization, and sustainable infrastructure investments in Rivers State and the Niger Delta region. He has consistently sponsored bills advancing education reform, regional connectivity, and youth employment.",
      "At DevFest Port Harcourt 2026, Hon. O.K. Chinda joins the tech community to deliver a visionary Keynote Address on accelerating digital capacity, supporting grassroots technical talent, and creating public-private synergies that drive the South-South tech revolution.",
    ],
    skills: ["Public Policy", "Digital Inclusion", "Youth Empowerment", "Economic Growth", "Legislative Reform"],
    twitter: "https://x.com/OKChinda",
    twitterHandle: "@OKChinda",
  },
  "paul-jeremiah": {
    name: "Paul Jeremiah",
    badge: "Keynote Speaker · Product Builder",
    subBadge: "Mobile & AI Workflows",
    subBadgeColor: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300",
    role: "Indie Hacker — Piya, FastResume, Prioritize App, Cookpaddy, The Bar - Dating checklist",
    image: "/speakers/paul-jeremiah.png",
    bgColor: "bg-[#FDF4CE]",
    bioParagraphs: [
      "Paul Jeremiah is a software engineer, product builder, and founding engineer who specializes in building and launching production-ready mobile applications, backend systems, AI workflows, and cloud infrastructure. He has worked as a Lead Engineer at Medalla and Staffi, developing digital products for healthcare recruitment in Sweden, and has built several independent applications, including Okepoint, Prioritize, Cook Paddy, Fast Resume by Elio, and Piya.",
      "Paul’s technical experience spans Flutter, Dart, Swift, Kotlin, React, Node.js, TypeScript, Firebase, Google Cloud Platform, AWS, AI agents, and automated development workflows. He is especially interested in how solo developers can use AI to research, plan, design, build, test, launch, and monetize useful software products.",
      "He has previously spoken at FlutterConf and Flutterbytes on debugging, testing, application stability, and user insights. Through his talks, Paul shares practical lessons from building real products, making technical decisions, and taking applications from an initial idea to users.",
    ],
    skills: ["Flutter", "AI Agents", "Cloud Infrastructure", "Indie Hacking", "Mobile Architecture"],
    twitter: "https://www.x.com/pauledemekong",
    twitterHandle: "@pauledemekong",
  },
};

export default function SpeakersSection({ speakers }: SpeakersSectionProps) {
  const [activeDay, setActiveDay] = useState<string | number>("all");
  const [selectedKeynote, setSelectedKeynote] = useState<"ok-chinda" | "paul-jeremiah">("ok-chinda");
  const currentKeynote = KEYNOTE_DATA[selectedKeynote];

  const filteredSpeakers =
    activeDay === "all" || activeDay === 4
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
            href="https://forms.gle/48otTTzPB2ezHpqh9"
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

      {/* ── Featured Keynote Speaker Spotlight (Hon. O.K. Chinda & Paul Jeremiah) ──────── */}
      <div className="mb-14 sm:mb-20 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/15 p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl">
        {/* Glow ambient background effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-google-blue/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5B82A]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Keynote Switcher Selector */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04] animate-pulse" />
            <span className="font-akira font-black text-xs sm:text-sm text-yellow-400 uppercase tracking-widest">
              DevFest 2026 Keynote Speakers
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedKeynote("ok-chinda")}
              className={`px-4 sm:px-6 py-2 rounded-full font-akira text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedKeynote === "ok-chinda"
                  ? "bg-[#F5B82A] text-black shadow-md scale-105"
                  : "bg-white/10 text-white hover:bg-white/15 border border-white/20"
              }`}
            >
              ★ Hon. O.K. Chinda
            </button>
            <button
              onClick={() => setSelectedKeynote("paul-jeremiah")}
              className={`px-4 sm:px-6 py-2 rounded-full font-akira text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedKeynote === "paul-jeremiah"
                  ? "bg-[#F5B82A] text-black shadow-md scale-105"
                  : "bg-white/10 text-white hover:bg-white/15 border border-white/20"
              }`}
            >
              ★ Paul Jeremiah
            </button>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait Frame */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className={`relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden ${currentKeynote.bgColor} border-2 border-white/20 shadow-xl group transition-all duration-300`}>
              <Image
                src={currentKeynote.image}
                alt={`${currentKeynote.name} - Keynote Speaker`}
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm text-yellow-400 font-akira text-[10px] tracking-wider uppercase border border-yellow-400/30">
                Keynote Speaker
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-google-blue/20 border border-google-blue/40 text-blue-300 font-sans text-xs font-bold uppercase tracking-wider">
                {currentKeynote.badge}
              </span>
              <span className={`px-3.5 py-1 rounded-full font-sans text-xs font-bold uppercase tracking-wider border ${currentKeynote.subBadgeColor}`}>
                {currentKeynote.subBadge}
              </span>
            </div>

            <div>
              <h2 className="font-akira font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
                {currentKeynote.name}
              </h2>
              <p className="text-sm sm:text-base text-yellow-400 font-semibold mt-1.5">
                {currentKeynote.role}
              </p>
            </div>

            <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              {currentKeynote.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                {currentKeynote.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-white/10 text-white/90 text-xs font-medium border border-white/10"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

              {currentKeynote.twitter && (
                <a
                  href={currentKeynote.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black font-sans font-bold text-xs hover:bg-gray-200 transition-all hover:scale-105 shadow-md"
                  aria-label={`Follow ${currentKeynote.name} on X`}
                >
                  <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Follow {currentKeynote.twitterHandle}</span>
                </a>
              )}
            </div>
          </div>
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
            href="https://forms.gle/48otTTzPB2ezHpqh9"
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
          href="https://forms.gle/48otTTzPB2ezHpqh9"
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
