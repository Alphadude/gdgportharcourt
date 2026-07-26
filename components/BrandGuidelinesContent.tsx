// ─────────────────────────────────────────────────────────────────────────────
// components/BrandGuidelinesContent.tsx
// Interactive Brand Guidelines component modeled after gdgbandung.com/brand-guidelines
// Customized for Google Developer Group Port Harcourt
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ToastState {
  message: string;
  visible: boolean;
}

const CORE_COLORS = [
  { name: "Blue 500", hex: "#4285F4", usage: "Primary brand color" },
  { name: "Green 500", hex: "#34A853", usage: "Success and growth" },
  { name: "Yellow 600", hex: "#F9AB00", usage: "Attention and energy" },
  { name: "Red 500", hex: "#EA4335", usage: "Alerts and emphasis" },
];

const HALFTONE_COLORS = [
  { name: "Halftone Blue", hex: "#57CAFF" },
  { name: "Halftone Green", hex: "#5CDB6D" },
  { name: "Halftone Yellow", hex: "#FFD427" },
  { name: "Halftone Red", hex: "#FF7DAF" },
];

const PASTEL_COLORS = [
  { name: "Pastel Blue", hex: "#C3ECF6" },
  { name: "Pastel Green", hex: "#CCF6C5" },
  { name: "Pastel Yellow", hex: "#FFE7A5" },
  { name: "Pastel Red", hex: "#F8D8D8" },
];

const GRAYSCALE_COLORS = [
  { name: "Off White", hex: "#F0F0F0" },
  { name: "Black 02", hex: "#1E1E1E" },
];

export default function BrandGuidelinesContent() {
  const [toast, setToast] = useState<ToastState>({ message: "", visible: false });
  const [customSampleText, setCustomSampleText] = useState("Google Developer Group Port Harcourt");

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: "", visible: false });
    }, 2800);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} (${text}) to clipboard!`);
  };

  const triggerDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloading ${filename}...`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-gray-900 font-sans pb-20">
      {/* ── Toast Notification ──────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          toast.visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[#18181B] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 text-sm font-semibold">
          <span className="flex h-2 w-2 rounded-full bg-google-green animate-ping" />
          <svg className="w-4 h-4 text-google-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toast.message}</span>
        </div>
      </div>

      {/* ── Top Hero Header ─────────────────────────────────────────────────── */}
      <div className="bg-[#18181B] text-white pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/"
            className="text-gray-300 hover:text-white mb-6 inline-flex items-center gap-2 font-medium text-sm transition-colors group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          {/* 4-Color Animated Google Bar */}
          <div className="flex h-1.5 w-36 rounded-full overflow-hidden mb-6 shadow-sm">
            <span className="flex-1 bg-google-blue" />
            <span className="flex-1 bg-google-red" />
            <span className="flex-1 bg-google-yellow" />
            <span className="flex-1 bg-google-green" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-akira tracking-tight mb-4 text-white">
            BRAND GUIDELINES
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed">
            Representing the branding of Google Developer Group Port Harcourt
          </p>
        </div>
      </div>

      {/* ── Main Content Container ────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        {/* ── Card 1: About GDG Port Harcourt Brand ───────────────────────── */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-google-blue flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              About GDG Port Harcourt Brand
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            These guidelines ensure that all GDG Port Harcourt communications, whether from organizers, partners, or community members, maintain a consistent and professional appearance that reflects our connection to the global Google Developer community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => triggerDownload("/brand-guidelines/GDG_Port_Harcourt_Horizontal_Light.svg", "GDG_Port_Harcourt_Brand_Assets.svg")}
              className="inline-flex items-center gap-2 bg-google-blue hover:bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02] shadow-sm active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Logo Assets
            </button>
          </div>
        </section>

        {/* ── Card 2: Logo ─────────────────────────────────────────────────── */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-google-green flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Logo</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            While the <span className="text-google-blue font-bold">horizontal logo is preferred</span>, the stacked logo can be used as an alternative when space is a limiting factor.
          </p>

          <div className="space-y-10">
            {/* Horizontal Logo Section */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-google-blue" />
                Horizontal Logo (Preferred)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Light Background Box */}
                <div className="border border-gray-200 rounded-xl overflow-hidden group">
                  <div className="bg-white p-8 flex items-center justify-center min-h-[140px] relative border-b border-gray-100">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Horizontal_Light.svg"
                      alt="GDG Port Harcourt Horizontal Light Logo"
                      width={360}
                      height={60}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Light Background</h4>
                      <p className="text-xs text-gray-600">Use on light backgrounds and white surfaces</p>
                    </div>
                    <button
                      onClick={() => triggerDownload("/brand-guidelines/GDG_Port_Harcourt_Horizontal_Light.svg", "GDG_Port_Harcourt_Horizontal_Light.svg")}
                      className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-google-blue hover:border-google-blue transition-colors text-xs font-semibold"
                      title="Download SVG"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dark Background Box */}
                <div className="border border-gray-200 rounded-xl overflow-hidden group">
                  <div className="bg-[#18181B] p-8 flex items-center justify-center min-h-[140px] relative border-b border-gray-800">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Horizontal_Dark.svg"
                      alt="GDG Port Harcourt Horizontal Dark Logo"
                      width={360}
                      height={60}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Dark Background</h4>
                      <p className="text-xs text-gray-600">Use on dark backgrounds and colored surfaces</p>
                    </div>
                    <button
                      onClick={() => triggerDownload("/brand-guidelines/GDG_Port_Harcourt_Horizontal_Dark.svg", "GDG_Port_Harcourt_Horizontal_Dark.svg")}
                      className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-google-blue hover:border-google-blue transition-colors text-xs font-semibold"
                      title="Download SVG"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 font-medium">
                Use horizontal format whenever possible for maximum brand recognition and visual impact.
              </p>
            </div>

            {/* Stacked Logo Section */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-google-green" />
                Stacked Logo (Alternative)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Light Background Box */}
                <div className="border border-gray-200 rounded-xl overflow-hidden group">
                  <div className="bg-white p-8 flex items-center justify-center min-h-[180px] border-b border-gray-100">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Stacked_Light.svg"
                      alt="GDG Port Harcourt Stacked Light Logo"
                      width={240}
                      height={160}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Light Background</h4>
                      <p className="text-xs text-gray-600">Stacked version for light backgrounds</p>
                    </div>
                    <button
                      onClick={() => triggerDownload("/brand-guidelines/GDG_Port_Harcourt_Stacked_Light.svg", "GDG_Port_Harcourt_Stacked_Light.svg")}
                      className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-google-blue hover:border-google-blue transition-colors text-xs font-semibold"
                      title="Download SVG"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dark Background Box */}
                <div className="border border-gray-200 rounded-xl overflow-hidden group">
                  <div className="bg-[#18181B] p-8 flex items-center justify-center min-h-[180px] border-b border-gray-800">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Stacked_Dark.svg"
                      alt="GDG Port Harcourt Stacked Dark Logo"
                      width={240}
                      height={160}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Dark Background</h4>
                      <p className="text-xs text-gray-600">Stacked version for dark backgrounds</p>
                    </div>
                    <button
                      onClick={() => triggerDownload("/brand-guidelines/GDG_Port_Harcourt_Stacked_Dark.svg", "GDG_Port_Harcourt_Stacked_Dark.svg")}
                      className="p-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-google-blue hover:border-google-blue transition-colors text-xs font-semibold"
                      title="Download SVG"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 font-medium">
                Use stacked format when horizontal space is limited or for square format applications.
              </p>
            </div>
          </div>
        </section>

        {/* ── Card 3: Typography Guidelines ────────────────────────────────── */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-google-yellow flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1="9" y1="20" x2="15" y2="20" />
                <line x1="12" y1="4" x2="12" y2="20" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Typography Guidelines</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Google Developer Groups use specific typography to maintain consistency with Google&apos;s design system.
          </p>

          {/* Interactive Font Sandbox Tester Input */}
          <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
            <label htmlFor="font-tester" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Type custom preview text below:
            </label>
            <input
              id="font-tester"
              type="text"
              value={customSampleText}
              onChange={(e) => setCustomSampleText(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent font-medium"
              placeholder="Type your preview text..."
            />
          </div>

          <div className="space-y-6">
            {/* Main Typeface: Google Sans */}
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Google Sans - Main Typeface</h3>
              <p className="text-sm text-gray-700 mb-2">
                Is the main typeface. Use a combination of bold and regular for titles or large sentences, so that the design is not too heavy.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                For paragraphs with smaller type point, use the Regular variable.
              </p>

              <div className="flex gap-2 text-xs mb-4">
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-full font-medium text-gray-800">
                  Normal (400)
                </span>
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-full font-medium text-gray-800">
                  Medium (500)
                </span>
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-full font-bold text-gray-900">
                  Bold (700)
                </span>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 space-y-3 shadow-inner font-google">
                <p className="text-xl sm:text-2xl font-normal text-gray-900 tracking-tight font-google">
                  {customSampleText || "Google Sans Normal"}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight font-google">
                  {customSampleText || "Google Sans Bold"}
                </p>
              </div>
            </div>

            {/* Secondary Typeface: Google Sans Mono */}
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Google Sans Mono - Secondary Typeface</h3>
              <p className="text-sm text-gray-700 mb-2">
                Is the secondary typeface and its function is to bring variety and the perception of &quot;code-style writing&quot; to the piece.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                It is used for short lines, talent names or additional data in small scale use.
              </p>

              <div className="flex gap-2 text-xs mb-4">
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-full font-medium text-gray-800">
                  Normal (400)
                </span>
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-full font-bold text-gray-900">
                  Bold (700)
                </span>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 space-y-3 font-google-mono shadow-inner">
                <p className="text-base sm:text-lg font-normal text-gray-900 font-google-mono">
                  {customSampleText || "Google Sans Mono Normal"}
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900 font-google-mono">
                  {customSampleText || "Google Sans Mono Bold"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Card 4: Official Color Palette ───────────────────────────────── */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Official Color Palette</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            GDG Port Harcourt uses Google&apos;s official brand colors to maintain consistency with the global Google Developer community. We started from the core color and went towards more pastel colors, without losing the brightness and saturation.
          </p>

          <div className="space-y-8">
            {/* Core Colors */}
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Core Colors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CORE_COLORS.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer group bg-white"
                  >
                    <div className="h-20 w-full" style={{ backgroundColor: color.hex }} />
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-google-blue transition-colors">
                        {color.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mb-1 text-xs font-mono text-gray-700">
                        <span>{color.hex}</span>
                        <svg className="w-3 h-3 text-gray-400 group-hover:text-google-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                      </div>
                      <p className="text-[11px] text-gray-500 line-clamp-1">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Halftones */}
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Halftones</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {HALFTONE_COLORS.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer group bg-white"
                  >
                    <div className="h-16 w-full" style={{ backgroundColor: color.hex }} />
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-google-blue transition-colors">
                        {color.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-gray-700">
                        <span>{color.hex}</span>
                        <svg className="w-3 h-3 text-gray-400 group-hover:text-google-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pastels */}
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Pastels</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {PASTEL_COLORS.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer group bg-white"
                  >
                    <div className="h-16 w-full" style={{ backgroundColor: color.hex }} />
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-google-blue transition-colors">
                        {color.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-gray-700">
                        <span>{color.hex}</span>
                        <svg className="w-3 h-3 text-gray-400 group-hover:text-google-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grayscale */}
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Grayscale</h3>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {GRAYSCALE_COLORS.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer group bg-white"
                  >
                    <div className="h-16 w-full" style={{ backgroundColor: color.hex }} />
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-google-blue transition-colors">
                        {color.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-gray-700">
                        <span>{color.hex}</span>
                        <svg className="w-3 h-3 text-gray-400 group-hover:text-google-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Usage Notes Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h4 className="font-bold text-gray-900 text-sm mb-2">Color Usage Notes</h4>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-google-blue font-bold">•</span>
                  <span>Use RGB / HEX values for digital applications (web, mobile, digital displays).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-green font-bold">•</span>
                  <span>For print materials, refer to PANTONE color codes when available.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-yellow font-bold">•</span>
                  <span>Maintain sufficient contrast ratios (WCAG AA/AAA) for accessibility compliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-google-red font-bold">•</span>
                  <span>Click any color swatch above to instantly copy its hex code to your clipboard.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Card 5: Logo Usage Guidelines (Don'ts) ───────────────────────── */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-google-red flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Logo Usage Guidelines</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Follow these guidelines to ensure proper use of the GDG logo and maintain brand integrity across all channels.
          </p>

          <div>
            <h3 className="font-bold text-google-red text-lg mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-google-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0-6l6 6" />
              </svg>
              Don&apos;ts
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Don't 1 */}
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[140px] border border-gray-200 relative overflow-hidden group">
                  <div className="transform scale-90 contrast-125 saturate-200 filter skew-x-6">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Horizontal_Light.svg"
                      alt="Don't change color and shape"
                      width={280}
                      height={50}
                      className="hue-rotate-90 opacity-80"
                    />
                  </div>
                  <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-google-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Incorrect Usage
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-google-red text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Do not change the colors and shape.
                  </h4>
                </div>
              </div>

              {/* Don't 2 */}
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[140px] border border-gray-200 relative overflow-hidden group">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Horizontal_Dark.svg"
                      alt="Don't recolor secondary logo"
                      width={260}
                      height={45}
                      className="opacity-75"
                    />
                  </div>
                  <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-google-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Incorrect Background Contrast
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-google-red text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Do not recolor the secondary logo for light-colored backgrounds.
                  </h4>
                </div>
              </div>

              {/* Don't 3 */}
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[140px] border border-gray-200 relative overflow-hidden group">
                  <div className="drop-shadow-[0_15px_15px_rgba(234,67,53,0.8)] filter blur-[0.5px]">
                    <Image
                      src="/brand-guidelines/GDG_Port_Harcourt_Horizontal_Light.svg"
                      alt="Don't apply effects"
                      width={280}
                      height={50}
                    />
                  </div>
                  <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-google-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      No Effects or Shadows
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-google-red text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Do not apply any effects.
                  </h4>
                </div>
              </div>

              {/* Don't 4 */}
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[140px] border border-gray-200 relative overflow-hidden group">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm font-serif">
                    <div className="w-6 h-6 border-2 border-purple-600 border-r-transparent rounded-full transform rotate-45" />
                    <span className="font-serif italic text-lg text-purple-900 font-bold">
                      GDG Port Harcourt
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-google-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Incorrect Font Choice
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-google-red text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Do not use a different font.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer / CTA section ────────────────────────────────────────── */}
        <div className="pt-8 border-t border-gray-200 text-center space-y-6">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            These brand guidelines are based on official Google Developer Groups standards. Please check this page for updates and download the most recent logo files from our official repository.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-2.5 rounded-xl border border-gray-300 text-sm transition-all hover:scale-[1.02] shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <button
              onClick={() => triggerDownload("/brand-guidelines/GDG_Port_Harcourt_Horizontal_Light.svg", "GDG_Port_Harcourt_Brand_Assets.svg")}
              className="inline-flex items-center justify-center gap-2 bg-google-blue hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02] shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Logo Assets
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
