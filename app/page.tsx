// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx
// Homepage — Server Component
// Sections: Hero, Sponsor Ticker, Swag Section, Speakers Carousel, About, Tracks
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SponsorTicker from "@/components/SponsorTicker";
import CountdownTimer from "@/components/CountdownTimer";
import SwagSection from "@/components/SwagSection";
import SpeakersCarousel from "@/components/SpeakersCarousel";
import MemoryLaneSection from "@/components/MemoryLaneSection";
import FaqSection from "@/components/FaqSection";
import CommunityBanner from "@/components/CommunityBanner";
import TracksHeroBanner from "@/components/TracksHeroBanner";
import TracksCarouselSection from "@/components/TracksCarouselSection";
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

      {/* ── Countdown Timer ────────────────────────────────────────── */}
      <CountdownTimer />

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
                href="https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-devfest-port-harcourt-2026/cohost-gdg-port-harcourt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-md border-2 border-black"
                id="about-buy-tickets"
              >
                REGISTER
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

      {/* ── Tracks Carousel Section ──────────────────────────────────── */}
      <TracksCarouselSection />

      {/* ── Tracks Hero Banner (Whatever you're into...) ─────────────── */}
      <TracksHeroBanner />

      {/* ── Sponsorship & Partnership CTA Section ───────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue font-akira font-bold text-xs uppercase tracking-widest">
            SPONSORSHIP & PARTNERSHIPS
          </div>

          <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[0.98]">
            GET SEEN. GET CONNECTED.
            <br />
            <span className="text-google-blue">GIVE BACK.</span>
          </h2>

          <p className="text-gray-800 font-medium text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a startup, a tech company, or a community-first brand, sponsoring or exhibiting at <strong className="text-black font-bold">GDG Port Harcourt</strong> puts you in front of thousands of developers, creators, and tech leaders.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a
              href="https://docs.google.com/presentation/d/13uvnh9dXp1mFqMYBSD5WD7YOd-g7aCHlcYfEjnV03OM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-9 py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg border-2 border-black"
              id="sponsor-cta-button"
            >
              BECOME A SPONSOR →
            </a>
            <a
              href="https://forms.gle/Vn5LiWTzittEPez46"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-9 py-4 rounded-full bg-white text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 transition-all hover:scale-105 shadow-md border-2 border-black"
              id="apply-as-speaker-button"
            >
              APPLY AS A SPEAKER
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
