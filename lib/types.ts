// ─────────────────────────────────────────────────────────────────────────────
// lib/types.ts
// Central TypeScript type definitions for DevFest Port Harcourt 2026
// ─────────────────────────────────────────────────────────────────────────────

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  bio?: string;
  twitter?: string;
  linkedin?: string;
  tags?: string[]; // e.g. ["AI", "Web"]
}

export interface Session {
  id: string;
  title: string;
  description?: string;
  speakerIds: string[]; // refs Speaker.id
  startTime: string;   // "09:00"
  endTime: string;     // "09:45"
  day: number;         // 1 (28 Nov 2026)
  track: Track;
  room?: string;
  type: SessionType;
}

export type Track =
  | "AI / ML"
  | "Cloud"
  | "DevOps"
  | "Mobile"
  | "Web"
  | "Security"
  | "Open Source"
  | "Startup"
  | "General";

export type SessionType = "talk" | "workshop" | "keynote" | "panel" | "break";

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  tier: SponsorTier;
}

export type SponsorTier = "platinum" | "gold" | "silver" | "bronze" | "community";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "tickets";
}

export type TeamDepartment =
  | "all"
  | "organizing"
  | "design"
  | "engineering"
  | "product"
  | "marketing"
  | "qa"
  | "content";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: TeamDepartment;
  imageUrl: string;
  quote?: string;
  listeningTo?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}
