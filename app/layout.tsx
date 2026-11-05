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
    "Explore AI, Cloud, DevOps, Mobile, and Web development at DevFest Port Harcourt 2026 on November 28th, 2026 at Platinum Hall, Lemaco Gardens, Ada-George Road, Mgbuoba, Port Harcourt. Featuring workshops, keynotes, and expert speakers.",
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
  alternates: {
    canonical: "./",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-devfest-ph-2026",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  width: "device-width",
  initialScale: 1,
};

// ── Global Structured Data (JSON-LD) ─────────────────────────────────────────

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gdgportharcourt.com.ng/#organization",
      "name": "GDG Port Harcourt",
      "alternateName": ["Google Developer Group Port Harcourt", "GDG PH"],
      "url": "https://gdgportharcourt.com.ng",
      "logo": "https://gdgportharcourt.com.ng/gdg-logo.png",
      "sameAs": [
        "https://twitter.com/gdgportharcourt",
        "https://linkedin.com/company/gdgportharcourt",
        "https://gdg.community.dev/gdg-port-harcourt"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Community Support",
        "email": "gdgportharcourt@gmail.com",
        "availableLanguage": ["en"]
      }
    },
    {
      "@type": "Event",
      "@id": "https://gdgportharcourt.com.ng/#event",
      "name": "DevFest Port Harcourt 2026",
      "description": "The biggest tech festival in the South of Nigeria. Explore AI, Cloud, DevOps, Mobile, and Web development on November 28th, 2026 in Port Harcourt.",
      "startDate": "2026-11-28T09:00:00+01:00",
      "endDate": "2026-11-28T18:00:00+01:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Platinum Hall, Lemaco Gardens",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ada-George Road, Mgbuoba",
          "addressLocality": "Port Harcourt",
          "postalCode": "500272",
          "addressRegion": "Rivers State",
          "addressCountry": "NG"
        }
      },
      "image": [
        "https://gdgportharcourt.com.ng/opengraph-image"
      ],
      "organizer": {
        "@id": "https://gdgportharcourt.com.ng/#organization"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-devfest-port-harcourt-2026/cohost-gdg-port-harcourt/",
        "price": "0",
        "priceCurrency": "NGN",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01T00:00:00+01:00"
      }
    }
  ]
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

        {/* Global Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
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
