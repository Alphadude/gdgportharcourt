// ─────────────────────────────────────────────────────────────────────────────
// components/SponsorGrid.tsx
// Sponsor grid — tier-categorized layout (Platinum → Gold → Silver → Bronze)
// Used on the /sponsors section and homepage.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { Sponsor, SponsorTier } from "@/lib/types";

interface SponsorGridProps {
  sponsors: Sponsor[];
}

const TIER_CONFIG: Record<
  SponsorTier,
  { label: string; accent: string; logoSize: string; cols: string }
> = {
  platinum: {
    label: "Platinum Partners",
    accent: "text-sky-300",
    logoSize: "h-16 sm:h-20",
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  },
  gold: {
    label: "Gold Partners",
    accent: "text-google-yellow",
    logoSize: "h-12 sm:h-14",
    cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  },
  silver: {
    label: "Silver Partners",
    accent: "text-gray-300",
    logoSize: "h-10 sm:h-12",
    cols: "grid-cols-3 sm:grid-cols-4 lg:grid-cols-5",
  },
  bronze: {
    label: "Bronze Partners",
    accent: "text-amber-600",
    logoSize: "h-8 sm:h-10",
    cols: "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6",
  },
  community: {
    label: "Community Partners",
    accent: "text-google-green",
    logoSize: "h-8 sm:h-10",
    cols: "grid-cols-3 sm:grid-cols-5 lg:grid-cols-6",
  },
};

const TIER_ORDER: SponsorTier[] = ["platinum", "gold", "silver", "bronze", "community"];

export default function SponsorGrid({ sponsors }: SponsorGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-akira text-3xl sm:text-4xl text-white">
          OUR 2026{" "}
          <span className="bg-gradient-to-r from-google-blue to-google-green bg-clip-text text-transparent">
            PARTNERS
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          DevFest Port Harcourt is made possible by the generous support of our amazing
          sponsors and community partners.
        </p>
        <a
          href="https://docs.google.com/presentation/d/13uvnh9dXp1mFqMYBSD5WD7YOd-g7aCHlcYfEjnV03OM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-google-blue hover:underline text-sm font-semibold"
        >
          Interested in sponsoring? View Sponsor Deck →
        </a>
      </div>

      {/* Tier groups */}
      <div className="space-y-16">
        {TIER_ORDER.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier);
          if (tierSponsors.length === 0) return null;

          const config = TIER_CONFIG[tier];

          return (
            <div key={tier}>
              {/* Tier label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-white/10" />
                <h3 className={`text-sm font-semibold uppercase tracking-widest ${config.accent}`}>
                  {config.label}
                </h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Logos grid */}
              <div className={`grid ${config.cols} gap-6`}>
                {tierSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${sponsor.name}`}
                    className="flex items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className={`relative ${config.logoSize} w-full flex items-center justify-center`}>
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
