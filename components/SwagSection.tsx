// ─────────────────────────────────────────────────────────────────────────────
// components/SwagSection.tsx
// Swag / Tickets section matching 2025.devfestlagos.com design pattern
// Positioned below the sponsor logo carousel on the homepage.
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState, useEffect, useCallback } from "react";

export default function SwagSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("STANDARD SWAG");

  const openModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Handle ESC key press and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

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

              {/* Package Header (Price Removed) */}
              <h4 className="font-akira font-black text-lg sm:text-xl text-black uppercase tracking-tight mb-2">
                STANDARD SWAG
              </h4>
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

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => openModal("STANDARD SWAG")}
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-md text-center block cursor-pointer active:scale-95"
            >
              BUY SWAG
            </button>
          </div>

          {/* ── Card 2: PRO SWAG ───────────────────────────────────────── */}
          <div className="bg-[#FDF4CE] rounded-3xl p-6 sm:p-8 border-4 border-[#F5B82A] text-black shadow-2xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]">
            <div>
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

              {/* Package Header (Price Removed) */}
              <h4 className="font-akira font-black text-lg sm:text-xl text-black uppercase tracking-tight mb-2">
                PRO SWAG
              </h4>
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

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => openModal("PRO SWAG")}
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-md text-center block cursor-pointer active:scale-95"
            >
              BUY PRO SWAG
            </button>
          </div>
        </div>
      </div>

      {/* ── Coming Soon Modal ────────────────────────────────────────── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="swag-modal-title"
        >
          <div
            className="relative w-full max-w-lg bg-[#1F1F23] border-2 border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl transform transition-all animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Icon & Tag */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-500/20 via-orange-500/20 to-amber-500/30 border border-yellow-400/30 flex items-center justify-center mb-5 shadow-inner">
                <span className="text-3xl">🛍️</span>
              </div>

              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F5B82A]/10 border border-[#F5B82A]/30 text-[#F5B82A] text-[11px] font-akira font-black uppercase tracking-wider mb-3">
                {selectedPackage}
              </span>

              <h3
                id="swag-modal-title"
                className="font-akira font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug mb-3"
              >
                SWAG STORE
                <br />
                COMING SOON
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Official DevFest Port Harcourt 2026 merchandise and swag packs will be available for purchase soon! 
                Pre-orders and distribution instructions will be announced to all registered participants.
              </p>

              <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 mb-6 text-left">
                <p className="text-xs text-gray-400 font-medium flex items-center gap-2">
                  <span className="text-emerald-400 text-base">✓</span>
                  <span><strong>Admission is 100% Free:</strong> You can register today and add swag later.</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-devfest-port-harcourt-2026/cohost-gdg-port-harcourt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-md text-center"
                >
                  REGISTER NOW
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-akira font-black text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all"
                >
                  GOT IT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
