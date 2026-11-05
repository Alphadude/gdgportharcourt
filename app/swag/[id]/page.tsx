// ─────────────────────────────────────────────────────────────────────────────
// app/swag/[id]/page.tsx
// DevFest Port Harcourt 2026 — Swag Product Details Page
// ─────────────────────────────────────────────────────────────────────────────

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SWAG_ITEMS } from "@/lib/data/swags";
import SwagDetailView from "@/components/swag/SwagDetailView";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return SWAG_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = SWAG_ITEMS.find((s) => s.id === params.id);
  if (!item) {
    return {
      title: "Swag Not Found | DevFest Port Harcourt",
    };
  }

  return {
    title: `${item.name} | DevFest Swag Store`,
    description: item.tagline || item.description,
    alternates: {
      canonical: `/swag/${item.id}`,
    },
    openGraph: {
      title: `${item.name} | DevFest Port Harcourt 2026 Official Merch`,
      description: item.description,
      images: [
        {
          url: item.image,
          alt: item.name,
        },
      ],
    },
  };
}

export default function SwagProductPage({ params }: PageProps) {
  const item = SWAG_ITEMS.find((s) => s.id === params.id);

  if (!item) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": item.name,
    "description": item.longDescription || item.description,
    "image": `https://gdgportharcourt.com.ng${item.image}`,
    "brand": {
      "@type": "Brand",
      "name": "DevFest Port Harcourt 2026",
    },
    "offers": {
      "@type": "Offer",
      "url": `https://gdgportharcourt.com.ng/swag/${item.id}`,
      "priceCurrency": "NGN",
      "price": item.priceNGN,
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "GDG Port Harcourt",
      },
    },
  };

  return (
    <div className="bg-[#FAF7EE] text-black min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 w-full font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="max-w-6xl mx-auto">
        <SwagDetailView item={item} />
      </div>
    </div>
  );
}

