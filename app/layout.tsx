// ─────────────────────────────────────────────────────────────────────────────
// app/layout.tsx
// Root layout for DevFest Lagos 2025 clone
// - Loads Inter (body) + Akira (display) fonts via Next.js local/google fonts
// - Sets global metadata (title, description, OG, Twitter card)
// - Wraps all pages with Navbar + Footer
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    title: "DevFest Port Harcourt 2026 | The Biggest Tech Festival In The South",
    description:
      "Explore AI, Cloud, DevOps, Mobile, Web development, Product Design & Data Analytics at DevFest Port Harcourt 2026.",
    url: "https://gdgportharcourt.com.ng",
    siteName: "DevFest Port Harcourt 2026",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Port Harcourt 2026 | The Biggest Tech Festival In The South",
    description:
      "The biggest tech festival in the South · AI, Cloud, DevOps, Mobile & Web in Port Harcourt.",
    creator: "@gdgportharcourt",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://gdgportharcourt.com.ng"
  ),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/gdg-logo.png",
    shortcut: "/gdg-logo.png",
    apple: "/gdg-logo.png",
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YGXKVM37Z7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YGXKVM37Z7');
          `}
        </Script>
      </head>
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
