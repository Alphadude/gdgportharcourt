// ─────────────────────────────────────────────────────────────────────────────
// components/CommunityBanner.tsx
// Community section matching "WHAT IS GDG PORT HARCOURT UP TO?" orbital design
// Full-width (end to end) with top rounded corners, placed right above footer.
// ─────────────────────────────────────────────────────────────────────────────
"use client";

export default function CommunityBanner() {
  return (
    <section className="bg-[#FAF7EE] pt-6 text-white overflow-hidden w-full">
      {/* Yellow road lines SVG decoration on top light cream background */}
      <div className="flex justify-center -mb-1 opacity-75">
        <svg width="240" height="55" viewBox="0 0 240 55" fill="none">
          <path d="M90 0L105 55M150 0L135 55" stroke="#F5B82A" strokeWidth="4" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Full-Width Dark Card Container (End to End) */}
      <div className="bg-[#18181B] rounded-t-[3.5rem] sm:rounded-t-[5rem] w-full px-6 sm:px-12 lg:px-24 py-16 sm:py-24 border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              WHAT IS GDG
              <br />
              PORT HARCOURT UP TO?
            </h2>
            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Stay updated on all our activities, events, webinars. Be the first to know what the GDG Port Harcourt community is up to.
            </p>
            <div className="pt-2">
              <a
                href="https://gdg.community.dev/gdg-portharcourt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-md border-2 border-black"
              >
                JOIN THE COMMUNITY
              </a>
            </div>
          </div>

          {/* Right Orbital Ecosystem Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
              {/* Outer Orbit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#F5B82A]/30 animate-[spin_50s_linear_infinite]" />
              
              {/* Middle Orbit Ring */}
              <div className="absolute inset-10 rounded-full border-2 border-[#F5B82A]/40 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Inner Orbit Ring */}
              <div className="absolute inset-20 rounded-full border-2 border-[#F5B82A]/50" />

              {/* Center Emblem */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#18181B] border-2 border-[#F5B82A] flex items-center justify-center shadow-2xl z-10">
                <span className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-google-blue inline-block" />
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-google-red inline-block" />
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-google-yellow inline-block" />
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-google-green inline-block" />
                </span>
              </div>

              {/* Orbit Node 1 (Top) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#F5B82A] overflow-hidden bg-black shadow-xl">
                <img
                  src="https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp"
                  alt="Community Node"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbit Node 2 (Right) */}
              <div className="absolute top-1/3 right-0 translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#F5B82A] overflow-hidden bg-black shadow-xl">
                <img
                  src="https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Olumide%20Balogun.png"
                  alt="Community Node"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbit Node 3 (Bottom Right) */}
              <div className="absolute bottom-4 right-8 translate-x-1/4 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#F5B82A] overflow-hidden bg-black shadow-xl">
                <img
                  src="https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Odun%20Eweniyi.png"
                  alt="Community Node"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbit Node 4 (Bottom Left) */}
              <div className="absolute bottom-6 left-12 -translate-x-1/4 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#F5B82A] overflow-hidden bg-black shadow-xl">
                <img
                  src="https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Thomas%20Steiner.png"
                  alt="Community Node"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbit Node 5 (Left) */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#F5B82A] overflow-hidden bg-black shadow-xl">
                <img
                  src="https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Oluwadunni%20Fanibe.png"
                  alt="Community Node"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
