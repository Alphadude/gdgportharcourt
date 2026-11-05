// ─────────────────────────────────────────────────────────────────────────────
// components/SwagSection.tsx
// Swag / Merchandise section on Homepage
// Links directly to the dedicated DevFest Swag Store at /swag
// ─────────────────────────────────────────────────────────────────────────────
import Link from "next/link";

export default function SwagSection() {
  return (
    <section className="bg-[#18181B] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header & Sticker ───────────────────────────────────── */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
          {/* Techies Assemble Comic Sticker */}
          <div className="relative mb-4 rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-gradient-to-r from-google-blue via-google-red to-google-yellow text-white font-akira font-black text-xs uppercase tracking-wider border-2 border-black shadow-md">
              Techies Assemble
            </span>
          </div>

          <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95] max-w-4xl">
            PURCHASE YOUR SWAG
            <br />
            FOR DEVFEST
          </h2>

          <p className="text-gray-400 font-sans text-sm sm:text-base text-center mt-4 max-w-2xl font-medium leading-relaxed">
            <span className="text-emerald-400 font-bold">DevFest Port Harcourt 2026 is 100% free to attend!</span> Get official DevFest merchandise — exclusive hoodies, t-shirts, caps, stickers, and swag bags. Select an optional swag package below:
          </p>
        </div>

        {/* ── Swag Package Cards Grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* ── Card 1: STANDARD SWAG ──────────────────────────────────── */}
          <div className="bg-[#D0F2FE] rounded-3xl p-6 sm:p-8 border-4 border-[#3B82F6] text-black shadow-2xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]">
            <div>
              {/* Ticket Graphic at top */}
              <div className="bg-white rounded-2xl p-6 border-2 border-black relative mb-6 shadow-md flex items-center justify-between">
                {/* Barcode on left */}
                <div className="flex flex-col gap-1 shrink-0 border-r-2 border-dashed border-black/20 pr-4">
                  <div className="w-1.5 h-12 bg-black inline-block" />
                  <div className="w-1 h-12 bg-black inline-block" />
                </div>

                {/* Ticket Title */}
                <div className="text-center flex-1 px-4">
                  <p className="text-[10px] font-akira text-gray-500 uppercase tracking-widest">
                    DevFest Port Harcourt
                  </p>
                  <h3 className="font-akira font-black text-xl sm:text-2xl text-black uppercase tracking-tight">
                    STANDARD
                  </h3>
                  <p className="text-[9px] font-sans font-bold text-gray-600 uppercase mt-0.5">
                    28 November 2026
                  </p>
                </div>
              </div>

              {/* Package Header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <h4 className="font-akira font-black text-lg sm:text-xl text-black uppercase tracking-tight">
                  STANDARD SWAG
                </h4>
                <span className="font-akira font-black text-sm text-google-blue bg-white/70 px-3 py-1 rounded-full border border-black/10">
                  ₦12,000
                </span>
              </div>

              <p className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Open to everyone — get the essential DevFest Port Harcourt 2026 merchandise pack.
              </p>

              {/* Feature Bullet List */}
              <ul className="space-y-3 text-xs sm:text-sm font-bold text-gray-900 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-extrabold text-base">→</span>
                  Official DevFest T-Shirt &amp; Lanyard
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-extrabold text-base">→</span>
                  Custom Sticker Pack &amp; Notebook
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-extrabold text-base">→</span>
                  Access to Sponsor Booth Swags
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-extrabold text-base">→</span>
                  Conference Tote Bag &amp; Badge
                </li>
              </ul>
            </div>

            {/* CTA Button -> links to /swag?package=standard */}
            <Link
              href="/swag?package=standard"
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-md text-center block cursor-pointer active:scale-95"
            >
              BUY SWAG →
            </Link>
          </div>

          {/* ── Card 2: PRO SWAG ───────────────────────────────────────── */}
          <div className="bg-[#FDF4CE] rounded-3xl p-6 sm:p-8 border-4 border-[#F5B82A] text-black shadow-2xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] relative">
            <div>
              {/* Badge */}
              <div className="absolute -top-3.5 right-6 bg-black text-yellow-400 font-akira text-[10px] font-black uppercase px-3 py-1 rounded-full border-2 border-[#F5B82A] shadow-md tracking-wider">
                MOST POPULAR
              </div>

              {/* Ticket Graphic at top */}
              <div className="bg-black text-white rounded-2xl p-6 border-2 border-black relative mb-6 shadow-md flex items-center justify-between">
                {/* Barcode on left */}
                <div className="flex flex-col gap-1 shrink-0 border-r-2 border-dashed border-white/20 pr-4">
                  <div className="w-1.5 h-12 bg-white inline-block" />
                  <div className="w-1 h-12 bg-white inline-block" />
                </div>

                {/* Ticket Title */}
                <div className="text-center flex-1 px-4">
                  <p className="text-[10px] font-akira text-yellow-400 uppercase tracking-widest">
                    DevFest Port Harcourt
                  </p>
                  <h3 className="font-akira font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                    PRO SWAG
                  </h3>
                  <p className="text-[9px] font-sans font-bold text-gray-400 uppercase mt-0.5">
                    28 November 2026
                  </p>
                </div>
              </div>

              {/* Package Header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <h4 className="font-akira font-black text-lg sm:text-xl text-black uppercase tracking-tight">
                  PRO SWAG
                </h4>
                <span className="font-akira font-black text-sm text-black bg-white/80 px-3 py-1 rounded-full border border-black/10">
                  ₦28,000
                </span>
              </div>

              <p className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                For techies who want the complete premium merchandise collection &amp; exclusive items.
              </p>

              {/* Feature Bullet List */}
              <ul className="space-y-3 text-xs sm:text-sm font-bold text-gray-900 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-amber-600 font-extrabold text-base">→</span>
                  Premium Heavyweight DevFest Hoodie
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600 font-extrabold text-base">→</span>
                  Embroidered Snapback Cap &amp; Water Bottle
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600 font-extrabold text-base">→</span>
                  VIP Speaker Lounge Swag Box
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600 font-extrabold text-base">→</span>
                  Complete Standard Pack + Exclusive Merch
                </li>
              </ul>
            </div>

            {/* CTA Button -> links to /swag?package=pro */}
            <Link
              href="/swag?package=pro"
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-md text-center block cursor-pointer active:scale-95"
            >
              BUY PRO SWAG →
            </Link>
          </div>
        </div>

        {/* ── View All Merchandise Storefront Link ──────────────────────── */}
        <div className="mt-12 text-center">
          <Link
            href="/swag"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-akira text-xs font-bold uppercase tracking-wider border border-white/20 transition-all hover:scale-105"
          >
            <span>EXPLORE ALL APPAREL &amp; ACCESSORIES</span>
            <span className="text-yellow-400">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
