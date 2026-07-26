// ─────────────────────────────────────────────────────────────────────────────
// components/Navbar.tsx
// Responsive navbar matching the official DevFest Lagos 2025 top header layout
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "SCHEDULE", href: "/schedule" },
  { label: "SPEAKERS", href: "/speakers" },
  { label: "DP GENERATOR", href: "/dp-generator" },
  { label: "FAQS", href: "/faqs" },
  { label: "TEAM", href: "/team" },
  { label: "BRAND", href: "/brand-guidelines" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Desktop + Tablet Navbar ─────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#18181B] border-b border-black/10 py-3 px-4 sm:px-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo capsule on Left */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full font-sans font-extrabold text-sm shadow-sm hover:scale-105 transition-transform"
          >
            {/* Google 4-color brackets emblem */}
            <span className="flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-google-blue inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-google-red inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-google-yellow inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-google-green inline-block" />
            </span>
            <span className="font-black tracking-tight text-black text-sm">
              DevFest Port Harcourt
            </span>
          </Link>

          {/* Desktop Center Links Pill */}
          <div className="hidden md:flex items-center bg-white rounded-full px-8 py-2 shadow-sm border border-black/10">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-xs font-akira font-black tracking-wider transition-colors ${
                        active ? "text-google-blue" : "text-black hover:text-google-blue"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Yellow CTA Pill */}
          <div className="hidden md:flex items-center">
            <a
              href="https://tickets.devfestlagos.com/buy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs border-2 border-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-sm uppercase tracking-wider"
            >
              BUY TICKETS
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer Overlay ───────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs bg-[#18181B] text-white border-l border-white/10 flex flex-col transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
          <span className="font-akira text-white text-sm font-bold">
            DevFest Port Harcourt
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-400 hover:text-white p-1 transition-colors"
            aria-label="Close navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-2 px-4 py-6 flex-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-akira font-bold transition-colors ${
                    active
                      ? "bg-google-blue text-white"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="p-6 border-t border-white/10">
          <a
            href="https://tickets.devfestlagos.com/buy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center block px-6 py-3 rounded-full bg-[#F5B82A] text-black font-akira font-bold text-xs border-2 border-black hover:bg-yellow-400 transition-all uppercase tracking-wider"
          >
            BUY TICKETS
          </a>
        </div>
      </aside>
    </>
  );
}
