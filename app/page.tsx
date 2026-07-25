// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx
// Homepage — Server Component
// Sections: Hero, Sponsor Ticker, Swag Section, Speakers Carousel, About, Tracks
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SponsorTicker from "@/components/SponsorTicker";
import SwagSection from "@/components/SwagSection";
import SpeakersCarousel from "@/components/SpeakersCarousel";
import MemoryLaneSection from "@/components/MemoryLaneSection";
import FaqSection from "@/components/FaqSection";
import CommunityBanner from "@/components/CommunityBanner";
import Link from "next/link";
import { speakers } from "@/lib/data/speakers";
import { sponsors } from "@/lib/data/sponsors";

export const metadata: Metadata = {
  title: "DevFest Port Harcourt 2026 | Tech & Developer Gathering",
};

export default function HomePage() {
  return (
    <div className="bg-[#FAF7EE] text-black w-full min-h-screen font-sans overflow-hidden">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Sponsor Ticker ─────────────────────────────────────────── */}
      <SponsorTicker sponsors={sponsors} />

      {/* ── Swag Section (Purchasing DevFest Merch) ────────────────── */}
      <SwagSection />

      {/* ── Featured Speakers Carousel (All Speakers) ───────────────── */}
      <SpeakersCarousel speakers={speakers} />

      {/* ── About / Event Details Card ──────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden bg-[#18181B] text-white p-8 sm:p-14 lg:p-16 border border-black/10 shadow-2xl">
          {/* Background Gradient Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-google-blue/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-3xl space-y-6">
            <p className="text-[#F5B82A] text-xs sm:text-sm font-bold uppercase tracking-widest">
              About The Festival
            </p>

            <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              AFRICA&apos;S BIGGEST
              <br />
              TECH FESTIVAL
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              DevFest Port Harcourt 2026 is organized by Google Developer Group (GDG) Port Harcourt.
              An action-packed gathering covering AI, Cloud, Mobile, Web, DevOps, Security, and Open Source —
              taking place on <strong className="text-white font-bold">November 28th, 2026</strong> at <strong className="text-white font-bold">Venue TBD</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://tickets.devfestlagos.com/buy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-md border-2 border-black"
                id="about-buy-tickets"
              >
                BUY TICKETS
              </a>
              <Link
                href="/schedule"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 transition-all hover:scale-105 shadow-md border-2 border-black"
                id="about-view-schedule"
              >
                VIEW SCHEDULE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tracks Preview Grid ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-google-blue text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            What To Expect
          </p>
          <h2 className="font-akira font-black text-3xl sm:text-5xl text-black tracking-tight uppercase leading-none">
            5 DAYS · 20+ TRACKS
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Artificial Intelligence", emoji: "🤖", color: "bg-[#D0F2FE]" },
            { name: "Cloud & Infrastructure", emoji: "☁️", color: "bg-[#DCFCE7]" },
            { name: "Mobile Development", emoji: "📱", color: "bg-[#FCE7F3]" },
            { name: "Web Development", emoji: "🌐", color: "bg-[#FDF4CE]" },
            { name: "DevOps & SRE", emoji: "⚙️", color: "bg-[#FEF08A]" },
            { name: "Security & Privacy", emoji: "🔐", color: "bg-[#FFE4E6]" },
            { name: "Open Source", emoji: "🧑‍💻", color: "bg-[#CFFAFE]" },
            { name: "Startup & Product", emoji: "🚀", color: "bg-[#E0E7FF]" },
          ].map((track) => (
            <div
              key={track.name}
              className={`${track.color} border border-black/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-3xl sm:text-4xl mb-3">{track.emoji}</div>
              <h3 className="font-akira font-extrabold text-xs sm:text-sm text-black leading-snug uppercase">
                {track.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ready To Join CTA Section ────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-akira font-black text-3xl sm:text-6xl text-black tracking-tight uppercase leading-[0.95]">
            READY TO JOIN
            <br />
            <span className="text-google-blue">10,000+</span> DEVELOPERS?
          </h2>
          <p className="text-gray-700 font-medium text-base sm:text-lg max-w-xl mx-auto">
            Tickets are selling fast. Secure your spot at Africa&apos;s largest tech festival.
          </p>
          <div className="pt-4">
            <a
              href="https://tickets.devfestlagos.com/buy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg border-2 border-black"
              id="footer-cta-buy-tickets"
            >
              GET YOUR TICKET NOW →
            </a>
          </div>
          <p className="text-gray-500 font-bold text-xs sm:text-sm uppercase tracking-wider pt-2">
            November 28th, 2026 · Venue TBD, Port Harcourt
          </p>
        </div>
      </section>

      {/* ── Memory Lane Section ──────────────────────────────────────── */}
      <MemoryLaneSection />

      {/* ── Community Banner Section ─────────────────────────────────── */}
      <CommunityBanner />

      {/* ── FAQ Section (Positioned directly above Footer) ────────────── */}
      <FaqSection />
    </div>
  );
}
