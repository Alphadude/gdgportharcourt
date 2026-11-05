// ─────────────────────────────────────────────────────────────────────────────
// lib/data/swags.ts
// Official DevFest Port Harcourt 2026 Swag & Merchandise Inventory
// ─────────────────────────────────────────────────────────────────────────────

import { SwagItem } from "@/lib/types/swag";

export const SWAG_ITEMS: SwagItem[] = [
  // ── Bundles ─────────────────────────────────────────────────────────────
  {
    id: "standard",
    name: "STANDARD SWAG PACK",
    tagline: "Essential DevFest Port Harcourt 2026 Merch Pack",
    priceNGN: 12000,
    category: "bundle",
    description:
      "Open to everyone — get the official conference merchandise bundle including the custom tee, lanyard, stickers, and conference bag.",
    longDescription:
      "The Standard Swag Pack is the definitive conference starter kit for DevFest Port Harcourt 2026. Hand-curated by the GDG Port Harcourt community team, each item is crafted to commemorate South-South Nigeria's biggest tech festival. This bundle gives you the official screen-printed developer tee, custom holographic stickers to decorate your laptop, a branded lanyard and attendee badge for easy networking, and a durable canvas tote bag.",
    features: [
      "Official DevFest Port Harcourt T-Shirt & Lanyard",
      "Custom Holographic Sticker Pack & Tech Notebook",
      "Exclusive Access to Sponsor Booth Swags",
      "Heavy-duty Conference Tote Bag & Attendee Badge",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        name: "White Shirt",
        hex: "#FFFFFF",
        image: "/swag/official-developer-tee-white.png",
      },
      {
        name: "Black Shirt",
        hex: "#121214",
        image: "/swag/official-developer-tee-black.png",
      },
    ],
    image: "/swag/official-developer-tee-white.png",
    gallery: [
      "/swag/official-developer-tee-white.png",
      "/swag/official-developer-tee-black.png",
      "/devfest-2025/community.jpg",
      "/devfest-2025/girls.jpg",
    ],
    packageIncludes: [
      {
        name: "Official 2026 Developer Tee",
        description: "100% combed cotton screen-printed conference t-shirt.",
        icon: "👕",
      },
      {
        name: "Woven Conference Lanyard & Pass",
        description: "Smooth satin woven lanyard with metal swivel hook & NFC badge.",
        icon: "🪪",
      },
      {
        name: "Holographic Sticker Pack & Journal",
        description: "20+ die-cut waterproof vinyl stickers plus a dot-grid developer notebook.",
        icon: "📓",
      },
      {
        name: "Heavy-duty Canvas Tote Bag",
        description: "12oz reinforced organic cotton tote bag for laptops and sponsor swags.",
        icon: "🛍️",
      },
    ],
    specifications: {
      "Pack Weight": "Approx. 650g",
      "T-Shirt Fabric": "100% Combed Ring-Spun Cotton (180 GSM)",
      "Bag Dimensions": "38cm x 42cm with reinforced 60cm shoulder handles",
      "Sticker Material": "UV-resistant, waterproof vinyl die-cuts",
      "Fulfillment": "Event Day Collection at DevFest Port Harcourt Venue",
    },
    inStock: true,
    accentColor: "#D0F2FE",
    borderColor: "#3B82F6",
  },
  {
    id: "pro",
    name: "PRO SWAG PACK",
    tagline: "Complete Premium Merchandise Collection & Exclusive Perks",
    priceNGN: 28000,
    category: "bundle",
    popular: true,
    badge: "MOST POPULAR",
    description:
      "For techies who want the complete premium collection featuring the heavyweight fleece hoodie, embroidered snapback cap, stainless water bottle, and VIP lounge access.",
    longDescription:
      "The Pro Swag Pack represents the pinnacle of DevFest merchandise. Designed for senior developers, founders, and community champions, it packs the ultra-luxurious 380 GSM heavyweight fleece hoodie, the 3D puff embroidered snapback cap, a double-wall vacuum insulated stainless steel bottle, and the complete Standard Pack. Additionally, Pro Pack holders receive priority registration check-in at the venue and access to the VIP lounge networking area.",
    features: [
      "Premium Heavyweight Fleece DevFest Hoodie",
      "Embroidered Custom Snapback Cap & Matte Water Bottle",
      "VIP Speaker Lounge Swag Box & Priority Check-in",
      "Complete Standard Pack (T-Shirt, Tote, Stickers, Badge)",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        name: "Black Edition",
        hex: "#121214",
        image: "/swag/official-developer-tee-black.png",
      },
      {
        name: "White Edition",
        hex: "#FFFFFF",
        image: "/swag/official-developer-tee-white.png",
      },
    ],
    image: "/devfest-2025/highlights.jpg",
    gallery: [
      "/devfest-2025/highlights.jpg",
      "/swag/heavyweight-fleece-hoodie.png",
      "/swag/official-developer-tee-black.png",
      "/devfest-2025/memories.jpg",
    ],
    packageIncludes: [
      {
        name: "Heavyweight Fleece Hoodie (380 GSM)",
        description: "Ultra-soft brushed fleece with double-lined hood and metal tips.",
        icon: "🧥",
      },
      {
        name: "Official 2026 Developer Tee",
        description: "Choose your preferred color (White or Black) and size.",
        icon: "👕",
      },
      {
        name: "Embroidered Snapback Cap",
        description: "Structured wool-blend 6-panel cap with 3D embroidery.",
        icon: "🧢",
      },
      {
        name: "750ml Vacuum Insulated Flask",
        description: "Laser-etched stainless steel bottle; keeps liquids cold 24 hrs.",
        icon: "🍶",
      },
      {
        name: "VIP Speaker Lounge Access Pass",
        description: "Fast-track badge check-in + access to speaker & VIP lounge areas.",
        icon: "⭐",
      },
    ],
    specifications: {
      "Pack Weight": "Approx. 1.85kg in commemorative gift box",
      "Hoodie Fabric": "380 GSM 80% Cotton / 20% Polyester Heavyweight Fleece",
      "Bottle Material": "Food-grade 18/8 Stainless Steel (750ml)",
      "Cap Style": "Structured 6-Panel with Adjustable Snapback",
      "Perks": "Priority Fast-Track Line + VIP Networking Area Pass",
    },
    inStock: true,
    accentColor: "#FDF4CE",
    borderColor: "#F5B82A",
  },

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
  {
    id: "snapback",
    name: "EMBROIDERED SNAPBACK CAP",
    tagline: "Structured 6-panel cap with 3D puff embroidery",
    priceNGN: 6000,
    category: "accessory",
    description:
      "A classic structured snapback cap featuring bold DevFest 3D puff embroidery and adjustable strap for all-day comfort.",
    longDescription:
      "Top off your conference outfit with the official DevFest Port Harcourt snapback. Built with a structured wool-blend crown, high-profile 6-panel design, and bold 3D puff embroidery that stands out. The adjustable 7-hole snap closure ensures an effortless custom fit for everyone.",
    features: [
      "Premium Wool Blend Fabric",
      "3D Puff Embroidery on Front",
      "Breathable Eyelets & Moisture Wicking Band",
      "One Size Fits All (Adjustable Snap)",
    ],
    image: "/devfest-2025/femalespeakers.jpg",
    gallery: [
      "/devfest-2025/femalespeakers.jpg",
      "/devfest-2025/volunteers.jpg",
    ],
    specifications: {
      "Crown Profile": "High Profile Structured 6-Panel",
      "Material": "80% Acrylic / 20% Wool",
      "Closure": "Classic 7-Hole Polyethylene Snapback",
      "Visor": "Flat Visor with 8 Rows of Stitching (Can be curved)",
    },
    inStock: true,
  },
  {
    id: "bottle",
    name: "INSULATED TECH WATER BOTTLE",
    tagline: "750ml double-wall vacuum insulated stainless steel flask",
    priceNGN: 8000,
    category: "accessory",
    description:
      "Keep your hydration cold for 24 hours or coffee hot for 12 hours during the intense conference day.",
    longDescription:
      "Stay energized and hydrated throughout keynote talks and breakout workshops. Crafted with food-grade 18/8 stainless steel and double-wall vacuum insulation, this 750ml bottle prevents exterior condensation and maintains beverage temperatures for hours. Features a durable powder-coated matte finish and precision laser-etched DevFest Port Harcourt logo.",
    features: [
      "750ml Food-Grade 18/8 Stainless Steel",
      "Double-Wall Vacuum Insulation",
      "Leak-Proof Carabiner Cap",
      "Laser-Etched DevFest Port Harcourt Logo",
    ],
    image: "/devfest-2025/volunteers.jpg",
    gallery: [
      "/devfest-2025/volunteers.jpg",
      "/devfest-2025/energy.jpg",
    ],
    specifications: {
      "Capacity": "750ml (25 oz)",
      "Insulation": "Vacuum Double-Wall (Cold 24h / Hot 12h)",
      "Material": "Pro-Grade 18/8 Stainless Steel & BPA-Free Lid",
      "Finish": "Scratch-Resistant Matte Powder Coating",
    },
    inStock: true,
  },
  {
    id: "sticker-pack",
    name: "TECH STICKER & NOTEBOOK BUNDLE",
    tagline: "20+ die-cut waterproof vinyl stickers and dot-grid developer journal",
    priceNGN: 4500,
    category: "accessory",
    description:
      "Personalize your laptop with vibrant, scratch-resistant tech stickers paired with a 160-page hardcover dot-grid journal.",
    longDescription:
      "Upgrade your laptop, desk, and developer setup. This pack includes over 20 unique die-cut stickers featuring programming jokes, Android mascots, AI neural symbols, Google Cloud emblems, and Port Harcourt tech slogans. Paired with an A5 hardcover dot-grid notebook perfect for sketching system architectures, wireframes, and conference notes.",
    features: [
      "20+ Waterproof Vinyl Die-Cut Stickers",
      "Hardcover A5 Dot-Grid Developer Journal",
      "Elastic Band & Ribbon Marker",
      "Fade-proof UV Lamination",
    ],
    image: "/devfest-2025/girls.jpg",
    gallery: [
      "/devfest-2025/girls.jpg",
      "/devfest-2025/community.jpg",
    ],
    specifications: {
      "Sticker Count": "22 Unique Die-Cut Vinyl Stickers",
      "Sticker Durability": "Waterproof, scratch-proof, sunlight-resistant",
      "Notebook Pages": "160 Pages (80 Sheets) 100 GSM Ivory Dot-Grid Paper",
      "Binding": "Hardcover Thread-Bound (Lies 180° Flat)",
    },
    inStock: true,
  },
];
