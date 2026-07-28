// ─────────────────────────────────────────────────────────────────────────────
// components/Footer.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";

const SOCIALS = [
  {
    name: "X (Twitter)",
    href: "https://twitter.com/gdgphc",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/gdgphc",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/gdgportharcourt",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@gdgportharcourt",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/google-developer-group-port-harcourt/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#FAF7EE] text-[#0A0A0A] pt-16 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* ── Top Header Section with Big Typography & Badge ───────────────── */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div className="flex-1">
            {/* DEVFEST + Inline Buy Tickets Pill */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <h2 className="font-akira text-[clamp(2.5rem,7.5vw,6rem)] font-black leading-none tracking-tight text-black">
                DEVFEST
              </h2>
              <a
                href="https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-devfest-port-harcourt-2026/cohost-gdg-port-harcourt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#F5B82A] text-black font-akira text-xs sm:text-sm font-bold border-2 border-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-sm uppercase tracking-wider"
              >
                REGISTER
              </a>
            </div>

            {/* PORT HARCOURT 2026 */}
            <h2 className="font-akira text-[clamp(2.5rem,7.5vw,6rem)] font-black leading-none tracking-tight text-black mt-2">
              PORT HARCOURT 2026
            </h2>
          </div>

          {/* World Class Energy Badge */}
          <div className="relative shrink-0 self-end md:self-auto">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#3B82F6] p-1.5 flex items-center justify-center relative shadow-lg">
              {/* Circular SVG text track */}
              <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-black fill-white tracking-widest uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    World Class Energy • World Class Energy •
                  </textPath>
                </text>
              </svg>

              {/* Center Globe Badge */}
              <div className="absolute inset-0 m-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#22C55E] border-2 border-white flex items-center justify-center shadow-inner">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Footer Body: Links on Left, Team Photo on Right ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          {/* Links Column Grid (Left - 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium">
            {/* Col 1 */}
            <div className="space-y-4">
              <Link href="/schedule" className="block text-gray-900 hover:text-google-blue transition-colors">
                Schedule
              </Link>
              <Link href="/speakers" className="block text-gray-900 hover:text-google-blue transition-colors">
                Speakers
              </Link>
              <Link
                href="/dp-generator"
                className="block text-gray-900 hover:text-google-blue transition-colors"
              >
                DP Generator
              </Link>

              <div className="pt-6 space-y-4">
                <Link href="/faqs" className="block text-gray-900 hover:text-google-blue transition-colors">
                  FAQs
                </Link>
                <Link href="#" className="block text-gray-900 hover:text-google-blue transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-gray-900 hover:text-google-blue transition-colors">
                  Community Guidelines
                </Link>
                <Link href="/brand-guidelines" className="block text-gray-900 hover:text-google-blue transition-colors">
                  Brand Guidelines
                </Link>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <Link href="#" className="block text-gray-900 hover:text-google-blue transition-colors">
                Login
              </Link>
              <a
                href="https://gdg.community.dev/gdg-port-harcourt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 hover:text-google-blue transition-colors"
              >
                Join the Community
              </a>

              {/* Socials section */}
              <div className="pt-6 space-y-3">
                <p className="text-gray-900 font-semibold">Follow Us:</p>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full bg-[#18181B] hover:bg-google-blue text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Photo Container (Right - 6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[2.5rem] rounded-tl-[4rem] overflow-hidden border-2 border-black/10 shadow-2xl bg-gray-900 aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9]">
              <Image
                src="/devfest2024.jpg"
                alt="DevFest Port Harcourt Organizing Team & Community"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── Bottom Copyright ─────────────────────────────────────────────── */}
        <div className="pt-8 border-t border-black/10 text-center">
          <p className="text-xs sm:text-sm font-bold text-black tracking-wide">
            © 2026 DevFest Port Harcourt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
