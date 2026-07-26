// ─────────────────────────────────────────────────────────────────────────────
// app/brand-guidelines/page.tsx
// Brand Guidelines page for GDG Port Harcourt modeled after gdgbandung.com/brand-guidelines
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import BrandGuidelinesContent from "@/components/BrandGuidelinesContent";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "Official brand guidelines, downloadable logos, typography specs, color palette, and usage rules for Google Developer Group Port Harcourt.",
  keywords: [
    "GDG Port Harcourt Brand Guidelines",
    "GDG Port Harcourt logo download",
    "Google Developer Groups brand assets",
    "Google Developer Group Port Harcourt color palette",
    "Google Sans typography",
  ],
  openGraph: {
    title: "Brand Guidelines | GDG Port Harcourt",
    description:
      "Explore official brand guidelines, download SVG logos, inspect typography and color palettes for GDG Port Harcourt.",
    url: "https://devfestportharcourt.com/brand-guidelines",
    siteName: "GDG Port Harcourt",
  },
};

export default function BrandGuidelinesPage() {
  return <BrandGuidelinesContent />;
}
