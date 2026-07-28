// ─────────────────────────────────────────────────────────────────────────────
// lib/data/sponsors.ts
// Sponsor dataset using local images from /public/logo/
// ─────────────────────────────────────────────────────────────────────────────

import { Sponsor } from "@/lib/types";

export const sponsors: Sponsor[] = [
  {
    id: "google",
    name: "Google",
    logoUrl: "/logo/google.webp",
    websiteUrl: "https://google.com",
    tier: "platinum",
  },
  {
    id: "codematic",
    name: "Codematic",
    logoUrl: "/logo/codematic.webp",
    websiteUrl: "https://codematic.io",
    tier: "gold",
  },
  {
    id: "decred",
    name: "Decred",
    logoUrl: "/logo/decred.webp",
    websiteUrl: "https://decred.org",
    tier: "gold",
  },
  {
    id: "eventeev",
    name: "Eventeev",
    logoUrl: "/logo/eventeev.svg",
    websiteUrl: "https://eventeev.com",
    tier: "gold",
  },
  {
    id: "helixgade",
    name: "Helixgade",
    logoUrl: "/logo/helixgade.png",
    websiteUrl: "https://helixgade.com",
    tier: "silver",
  },
  {
    id: "labtracka",
    name: "Labtracka",
    logoUrl: "/logo/labtracka.png",
    websiteUrl: "https://labtracka.com",
    tier: "silver",
  },
  {
    id: "olotusquare",
    name: "Olotu Square",
    logoUrl: "/logo/olotusquare.png",
    websiteUrl: "https://olotusquare.co",
    tier: "silver",
  },
  {
    id: "productsio",
    name: "Products.io",
    logoUrl: "/logo/productsio.webp",
    websiteUrl: "https://products.io",
    tier: "community",
  },
  {
    id: "bamboo",
    name: "Bamboo",
    logoUrl: "/logo/bamboo.webp",
    websiteUrl: "https://investbamboo.com",
    tier: "gold",
  },
  {
    id: "dits",
    name: "DITS",
    logoUrl: "/logo/DITS.webp",
    websiteUrl: "https://dits.ng",
    tier: "silver",
  },
  {
    id: "rustnigeria",
    name: "Rust Nigeria",
    logoUrl: "/logo/RustNigeria.webp",
    websiteUrl: "https://rustnigeria.org",
    tier: "community",
  },
];
