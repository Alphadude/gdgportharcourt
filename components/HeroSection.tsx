// ─────────────────────────────────────────────────────────────────────────────
// components/HeroSection.tsx
// Homepage hero matching the light-cream theme and typography from DevFest Lagos 2025
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#FAF7EE] text-black pt-28 pb-16 px-6 sm:px-12 lg:px-20"
      aria-label="Hero section"
    >
      {/* ── Port Harcourt Architecture Skyline Spotlight (Behind text) ───── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="w-full max-w-7xl px-4 sm:px-8 opacity-[0.15] sm:opacity-[0.20]">
          <Image
            src="/ph-architecture.svg"
            alt="Port Harcourt Architecture Skyline"
            width={1324}
            height={346}
            priority
            className="w-full h-auto object-contain object-center scale-105"
          />
        </div>
      </div>

      {/* ── Main content container ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Big Typography Column */}
          <div className="flex-1">
            {/* Single Semantic H1: DEVFEST PORT HARCOURT 2026 */}
            <h1 className="font-akira tracking-tight text-black">
              <span className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="text-[clamp(3rem,9vw,7.5rem)] font-black leading-none">
                  DEVFEST
                </span>
                <a
                  href="https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-devfest-port-harcourt-2026/cohost-gdg-port-harcourt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#F5B82A] text-black text-xs sm:text-sm font-bold border-2 border-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-sm uppercase tracking-wider"
                >
                  REGISTER
                </a>
              </span>
              <span className="block text-[clamp(2.5rem,7vw,6rem)] font-black leading-none mt-2">
                PORT HARCOURT 2026
              </span>
            </h1>
          </div>

          {/* World Class Energy Badge Stamp (Top Right) */}
          <div className="relative shrink-0 self-end md:self-auto">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#3B82F6] p-2 flex items-center justify-center relative shadow-lg">
              <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="heroCirclePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-black fill-white tracking-widest uppercase">
                  <textPath href="#heroCirclePath" startOffset="0%">
                    World Class Energy • World Class Energy •
                  </textPath>
                </text>
              </svg>

              {/* Center Globe */}
              <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#22C55E] border-2 border-white flex items-center justify-center shadow-inner">
                <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle & Date Location Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-black/10">
          <p className="text-gray-800 text-lg sm:text-xl font-medium max-w-xl leading-relaxed">
            Tech &amp; developer gathering (100% Free) — AI, Cloud, Mobile, Web &amp; DevOps at Platinum Hall, Lemaco Gardens, Port Harcourt.
          </p>

          <div className="flex items-center gap-3">
            <span className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-sans text-xs font-bold uppercase tracking-wider">
              100% Free Event
            </span>
            <span className="px-5 py-2.5 rounded-full bg-black text-white font-sans text-xs font-bold uppercase tracking-wider">
              28 Nov, 2026
            </span>
            <Link
              href="/schedule"
              className="px-5 py-2.5 rounded-full bg-white text-black border-2 border-black font-sans text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
