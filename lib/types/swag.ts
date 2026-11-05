// ─────────────────────────────────────────────────────────────────────────────
// lib/types/swag.ts
// Type definitions for DevFest Port Harcourt 2026 Swag & Merchandise Store
// ─────────────────────────────────────────────────────────────────────────────

export type SwagCategory = "bundle" | "apparel" | "accessory";
export type SwagSize = "S" | "M" | "L" | "XL" | "2XL" | "3XL";

export interface ColorOption {
  name: string;
  hex: string;
  image: string;
}

export interface SwagItem {
  id: string;
  name: string;
  tagline: string;
  priceNGN: number;
  category: SwagCategory;
  description: string;
  longDescription?: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  sizes?: SwagSize[];
  colors?: ColorOption[];
  colorOptions?: string[];
  image: string;
  gallery?: string[];
  specifications?: Record<string, string>;
  packageIncludes?: Array<{ name: string; description: string; icon: string }>;
  careInstructions?: string[];
  inStock: boolean;
  accentColor?: string;
  borderColor?: string;
}

export interface CartItem {
  id: string;
  swagId: string;
  name: string;
  priceNGN: number;
  size?: SwagSize;
  color?: string;
  quantity: number;
  image: string;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  preferredSize?: SwagSize;
  notes?: string;
}

export interface SwagOrder {
  orderReference: string;
  createdAt: string;
  customer: CustomerDetails;
  items: CartItem[];
  totalAmountNGN: number;
  paymentMethod: "paystack" | "pickup" | "transfer";
  paymentStatus: "paid" | "pending_pickup" | "awaiting_verification";
  paystackReference?: string;
  paidAt?: string;
}

