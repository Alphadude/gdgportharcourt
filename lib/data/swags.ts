// ─────────────────────────────────────────────────────────────────────────────
// lib/data/swags.ts
// Official DevFest Port Harcourt 2026 Swag & Merchandise Inventory
// ─────────────────────────────────────────────────────────────────────────────

import { SwagItem } from "@/lib/types/swag";

export const SWAG_ITEMS: SwagItem[] = [
  // ── Individual Apparel & Accessories ─────────────────────────────────────
  {
    id: "tshirt",
    name: "OFFICIAL 2026 DEVELOPER TEE",
    tagline: "Breathable 100% combed cotton tee with Akira graphic typography",
    priceNGN: 7500,
    category: "apparel",
    description:
      "The definitive DevFest Port Harcourt 2026 tee. Screen-printed with durable eco-friendly inks on premium ring-spun cotton.",
    longDescription:
      "Designed specifically for DevFest Port Harcourt 2026, this iconic tee showcases the official community emblem `{ DevFest } Port Harcourt` framed with symbolic developer glyphs (brackets, global connectivity globe, heart, and the Google Developer Groups slash marks). Crafted from ultra-soft 180 GSM ring-spun cotton, it provides lightweight breathability that holds its shape wash after wash.",
    features: [
      "100% Ring-Spun Combed Cotton (180 GSM)",
      "Reinforced Crewneck Collar & Shoulder Taping",
      "Eco-friendly High-Density Silk Screen Print",
      "Tailored Modern Unisex Fit",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        image: "/swag/official-developer-tee-white.png",
      },
      {
        name: "Black",
        hex: "#121214",
        image: "/swag/official-developer-tee-black.png",
      },
    ],
    image: "/swag/official-developer-tee-white.png",
    gallery: [
      "/swag/official-developer-tee-white.png",
      "/swag/official-developer-tee-black.png",
      "/devfest-2025/energy.jpg",
    ],
    specifications: {
      "Fabric Weight": "180 GSM (Grams per Square Meter)",
      "Composition": "100% Combed Ring-Spun Cotton",
      "Printing Method": "Durable Water-Based Silk Screen",
      "Collar": "1x1 Ribbed Knit with Double-Needle Coverstitching",
      "Fit": "True to size unisex tailored cut",
    },
    careInstructions: [
      "Machine wash cold inside-out with like colors",
      "Do not iron directly over the graphic print",
      "Tumble dry low or hang dry in shade for longest lifespan",
      "Do not use chlorine bleach",
    ],
    inStock: true,
  },
  {
    id: "hoodie",
    name: "HEAVYWEIGHT FLEECE HOODIE",
    tagline: "Ultra-comfy 380gsm premium fleece hoodie with embroidered GDG insignia",
    priceNGN: 18000,
    category: "apparel",
    description:
      "Engineered for late-night coding sessions and cool conference halls. Features double-lined hood, ribbed cuffs, and high-density chest print.",
    longDescription:
      "A must-have staple for developers. Our Heavyweight Fleece Hoodie is built with 380 GSM brushed interior fleece, making it cozy, structured, and warm without being bulky. Features custom gunmetal drawstring aglets, a deep double-lined hood, seamless kangaroo front pocket, and subtle embroidered GDG branding on the sleeve cuff.",
    features: [
      "380 GSM Heavyweight Cotton Blend",
      "Double-lined Hood with Metal Aglets",
      "Kangaroo Pocket & Secret Card Slot",
      "Shrink-resistant & Pre-washed Fabric",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        name: "Carbon Black",
        hex: "#18181B",
        image: "/swag/heavyweight-fleece-hoodie.png",
      },
    ],
    image: "/swag/heavyweight-fleece-hoodie.png",
    gallery: [
      "/swag/heavyweight-fleece-hoodie.png",
      "/devfest-2025/memories.jpg",
    ],
    specifications: {
      "Fabric Weight": "380 GSM Premium Brushed Fleece",
      "Material": "80% Cotton / 20% Polyester Anti-Pilling Blend",
      "Hardware": "Matte Black Engraved Drawstring Eyelets & Aglets",
      "Pocket": "Reinforced Bar-Tacked Kangaroo Pocket",
    },
    careInstructions: [
      "Wash inside-out in cold water",
      "Hang dry recommended to preserve fleece loft",
      "Low iron on reverse if needed",
    ],
    inStock: true,
  },
];
