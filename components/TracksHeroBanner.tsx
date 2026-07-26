// ─────────────────────────────────────────────────────────────────────────────
// components/TracksHeroBanner.tsx
// Banner section matching the official DevFest 2025 "Whatever you're into..." section
// Placed directly below the "5 DAYS · 20+ TRACKS" section on the homepage
// ─────────────────────────────────────────────────────────────────────────────

export default function TracksHeroBanner() {
  return (
    <section className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF7EE] overflow-hidden flex items-center justify-center min-h-[500px] sm:min-h-[600px]">
      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center">

        {/* ── FLOATING SHAPES ────────────────────────────────────────────── */}

        {/* 1. Top Left: Red/Pink Arrow Shape */}
        <div className="absolute -top-12 sm:-top-16 left-4 sm:left-12 lg:left-24 z-0 animate-bounce duration-[4000ms] pointer-events-none transform -rotate-3 hover:rotate-0 transition-transform">
          <svg className="w-24 h-16 sm:w-36 sm:h-24" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10 H105 L130 45 L105 80 H10 Z"
              fill="#FEE2E2"
              fillOpacity="0.85"
              stroke="#F87171"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path d="M55 45 H75 M65 35 V55" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 2. Top Middle: Gray Capsule/Pill */}
        <div className="absolute -top-20 sm:-top-24 left-1/2 -translate-x-1/2 z-0 pointer-events-none animate-pulse duration-[5000ms]">
          <svg className="w-16 h-28 sm:w-20 sm:h-36" viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="5"
              y="5"
              width="70"
              height="130"
              rx="35"
              fill="#E5E7EB"
              fillOpacity="0.75"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path d="M40 60 V80 M30 70 H50" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 3. Top Right: Light Green Cloud Shape */}
        <div className="absolute -top-12 sm:-top-16 right-4 sm:right-12 lg:right-24 z-0 pointer-events-none transform rotate-6 animate-bounce duration-[4500ms]">
          <svg className="w-24 h-20 sm:w-36 sm:h-28" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 70 C15 70 10 55 20 40 C10 25 30 10 50 20 C65 10 85 10 95 25 C110 15 130 30 120 45 C135 60 120 80 100 75 C90 90 45 90 30 70 Z"
              fill="#DCFCE7"
              fillOpacity="0.9"
              stroke="#4ADE80"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path d="M70 42 V58 M62 50 H78" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 4. Middle Right: Light Blue Wobbly Blob */}
        <div className="absolute top-1/3 -right-2 sm:-right-8 lg:right-4 z-0 pointer-events-none transform rotate-12">
          <svg className="w-24 h-24 sm:w-36 sm:h-36" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25 35 C15 65 35 105 65 95 C95 85 110 55 95 25 C80 -5 35 5 25 35 Z"
              fill="#E0F2FE"
              fillOpacity="0.9"
              stroke="#60A5FA"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
            <path d="M60 50 V70 M50 60 H70" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 5. Bottom Right: Pink Circle */}
        <div className="absolute -bottom-10 sm:-bottom-14 right-8 sm:right-24 lg:right-36 z-0 pointer-events-none">
          <svg className="w-20 h-20 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="#FCE7F3"
              fillOpacity="0.85"
              stroke="#F472B6"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
            <path d="M50 40 V60 M40 50 H60" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 6. Bottom Middle: Red/Rose Arch/Tombstone */}
        <div className="absolute -bottom-12 sm:-bottom-16 left-1/3 sm:left-5/12 z-0 pointer-events-none transform -rotate-6">
          <svg className="w-20 h-28 sm:w-28 sm:h-36" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 120 V50 C10 20 90 20 90 50 V120 Z"
              fill="#FFE4E6"
              fillOpacity="0.85"
              stroke="#FB7185"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path d="M50 65 V85 M40 75 H60" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 7. Bottom Left: Tilted Gray Rectangle */}
        <div className="absolute -bottom-10 sm:-bottom-14 left-4 sm:left-12 lg:left-20 z-0 pointer-events-none transform -rotate-12">
          <svg className="w-28 h-20 sm:w-40 sm:h-28" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="5"
              y="5"
              width="130"
              height="90"
              rx="12"
              fill="#E5E7EB"
              fillOpacity="0.8"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path d="M70 40 V60 M60 50 H80" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── CENTER TYPOGRAPHY TEXT ────────────────────────────────────── */}
        <div className="relative z-10 max-w-4xl px-4 py-8">
          <h2 className="font-akira font-black text-2xl sm:text-5xl lg:text-6xl text-black tracking-tight uppercase leading-[1.08] text-center select-none drop-shadow-sm">
            WHATEVER YOU&apos;RE INTO, THERE&apos;S A TRACK AT DEVFEST PORT HARCOURT MADE JUST FOR YOU.
          </h2>
        </div>

      </div>
    </section>
  );
}
