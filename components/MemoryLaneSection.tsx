// ─────────────────────────────────────────────────────────────────────────────
// components/MemoryLaneSection.tsx
// Memory Lane section matching 2025.devfestlagos.com exact design pattern
// ─────────────────────────────────────────────────────────────────────────────
"use client";

export default function MemoryLaneSection() {
  return (
    <section className="bg-[#FAF7EE] text-black pt-20 sm:pt-28 pb-10 px-6 sm:px-12 lg:px-20 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Heading, Subtitle & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[0.95]">
            LET&apos;S TAKE YOU DOWN
            <br />
            MEMORY LANE
          </h2>

          <p className="text-gray-800 font-sans text-sm sm:text-base leading-relaxed max-w-md font-medium">
            DevFest Port Harcourt 2025 was unforgettable. A time was thoroughly had and no be by cho cho cho, we have receipts.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-md border-2 border-black"
            >
              WATCH 2025 RECAP
            </a>

            <a
              href="https://photos.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#18181B] text-white font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-800 transition-all hover:scale-105 shadow-md border-2 border-black"
            >
              VIEW 2025 PHOTOS
            </a>
          </div>
        </div>

        {/* Right Column: Road Graphic & Photo Frame */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px]">
          {/* Perspective Yellow Road SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 400 500" fill="none" className="w-full h-full max-h-[500px]">
              {/* Left yellow road border */}
              <path d="M 230 0 L 120 500" stroke="#F5B82A" strokeWidth="4" opacity="0.6" />
              {/* Right yellow road border */}
              <path d="M 270 0 L 380 500" stroke="#F5B82A" strokeWidth="4" opacity="0.6" />
              {/* Center dashed lane divider */}
              <path d="M 250 0 L 250 500" stroke="#F5B82A" strokeWidth="3" strokeDasharray="12 12" opacity="0.5" />
            </svg>
          </div>

          {/* Photo Frame on Road */}
          <div className="relative z-10 rounded-2xl border-4 border-black overflow-hidden shadow-2xl bg-white w-60 h-72 sm:w-72 sm:h-96 transform hover:rotate-1 transition-transform duration-300">
            <img
              src="https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp"
              alt="DevFest 2025 Memory"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
