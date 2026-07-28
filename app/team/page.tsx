// ─────────────────────────────────────────────────────────────────────────────
// app/team/page.tsx
// Team page matching 2025.devfestlagos.com/team exact design layout
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import TeamSection from "@/components/TeamSection";
import { teamMembers } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the passionate GDG Port Harcourt volunteers who make DevFest Port Harcourt 2026 possible.",
};

export default function TeamPage() {
  return (
    <div className="bg-[#FAF7EE] text-black min-h-screen w-full font-sans overflow-hidden">
      {/* ── Top Hero Section with Grid Pattern ─────────────────────────── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-black/10 bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Big Akira Heading */}
          <h1 className="font-akira font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tight uppercase leading-[0.95] max-w-6xl mx-auto mb-8 sm:mb-12">
            MEET THE AWESOME DEVFEST TEAM
          </h1>

          {/* Subheader & Sticker Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16">
            {/* Red Designer Sticker */}
            <div className="relative shrink-0 rotate-[-7deg] hover:rotate-0 transition-transform duration-300">
              <div className="bg-[#E5484D] text-white px-5 py-4 rounded-2xl border-2 border-black shadow-lg text-center w-36 sm:w-40">
                <div className="text-2xl mb-1">😊</div>
                <p className="font-sans font-extrabold text-xs sm:text-sm leading-snug uppercase tracking-tight">
                  Designers Make It Pretty And Usable
                </p>
              </div>
            </div>

            {/* Subtitle & SEE ALL Pill */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 max-w-md">
              <p className="text-gray-900 text-lg sm:text-xl font-bold leading-snug">
                Meet the incredible superstars behind this year&apos;s edition of DevFest Port Harcourt!
              </p>

              <a
                href="#the-team"
                className="inline-flex items-center px-8 py-3 rounded-full border-2 border-black bg-white text-black font-akira font-black text-xs uppercase tracking-wider hover:bg-gray-100 transition-all hover:scale-105 shadow-sm"
              >
                SEE ALL
              </a>
            </div>
          </div>

          {/* ── Overlapping Polaroid Photo Cards Gallery ───────────────────── */}
          <div className="flex justify-center items-center gap-2 sm:gap-6 pt-4 px-2 overflow-visible">
            {/* Photo 1 (Left) */}
            <div className="relative rotate-[-6deg] hover:rotate-0 hover:z-20 transition-all duration-300 transform shrink-0">
              <div className="bg-white p-3 sm:p-4 rounded-sm shadow-2xl border border-black/10 w-44 sm:w-72 md:w-80">
                <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-gray-200">
                  <img
                    src="/team.jpg"
                    alt="DevFest Team Moment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Photo 2 (Center) */}
            <div className="relative rotate-[1deg] hover:rotate-0 hover:z-20 transition-all duration-300 transform shrink-0 z-10 -mx-4 sm:mx-0">
              <div className="bg-white p-3 sm:p-4 rounded-sm shadow-2xl border border-black/10 w-48 sm:w-80 md:w-96">
                <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-gray-200">
                  <img
                    src="/team2.jpg"
                    alt="DevFest Organizers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Photo 3 (Right) */}
            <div className="relative rotate-[6deg] hover:rotate-0 hover:z-20 transition-all duration-300 transform shrink-0">
              <div className="bg-white p-3 sm:p-4 rounded-sm shadow-2xl border border-black/10 w-44 sm:w-72 md:w-80">
                <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-gray-200">
                  <img
                    src="/team1.jpg"
                    alt="DevFest Community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lower Team Section (The Team List & Department Filter) ─────── */}
      <div id="the-team">
        <TeamSection members={teamMembers} />
      </div>
    </div>
  );
}
