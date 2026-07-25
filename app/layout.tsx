// ─────────────────────────────────────────────────────────────────────────────
// app/layout.tsx
// Root layout for DevFest Lagos 2025 clone
// - Loads Inter (body) + Akira (display) fonts via Next.js local/google fonts
// - Sets global metadata (title, description, OG, Twitter card)
// - Wraps all pages with Navbar + Footer
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// ── Site metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "DevFest Port Harcourt 2026 | Tech & Developer Gathering",
    template: "%s | DevFest Port Harcourt 2026",
  },
  description:
    "Explore AI, Cloud, DevOps, Mobile, and Web development at DevFest Port Harcourt 2026 on November 28th, 2026. Featuring workshops, keynotes, and expert speakers. Venue TBD.",
  keywords: [
    "DevFest Port Harcourt 2026",
    "GDG Port Harcourt",
    "developer conference Nigeria",
    "tech conference Port Harcourt",
    "Google Developer Groups",
    "AI conference",
    "cloud computing",
  ],
  authors: [{ name: "GDG Port Harcourt" }],
  openGraph: {
    title: "DevFest Port Harcourt 2026 | Tech & Developer Gathering",
    description:
      "AI, Cloud, DevOps, Mobile, and Web development. Join developers on November 28th, 2026 in Port Harcourt. Venue TBD.",
    url: "https://devfestportharcourt.com",
    siteName: "DevFest Port Harcourt 2026",
    images: [
      {
        url: "https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp",
        width: 1200,
        height: 630,
        alt: "DevFest Port Harcourt 2026",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Port Harcourt 2026 | Tech & Developer Gathering",
    description:
      "Tech festival in Port Harcourt. Nov 28, 2026 · Venue TBD.",
    images: ["https://storage.googleapis.com/devfestlagos2025/Ruby/OG%20IMAGE.webp"],
    creator: "@gdgportharcourt",
  },
  metadataBase: new URL("https://2025.devfestlagos.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

// ── Root Layout ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter bg-devfest-dark text-white antialiased">
        {/* Skip-to-main link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex flex-col min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
