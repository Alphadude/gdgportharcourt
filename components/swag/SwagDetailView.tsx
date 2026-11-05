// ─────────────────────────────────────────────────────────────────────────────
// components/swag/SwagDetailView.tsx
// Rich Product Details View for individual DevFest Swag Items & Bundles
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SwagItem, CartItem, SwagSize, SwagOrder } from "@/lib/types/swag";
import { SWAG_ITEMS } from "@/lib/data/swags";
import SwagCartDrawer from "./SwagCartDrawer";
import SwagCheckoutModal from "./SwagCheckoutModal";

interface SwagDetailViewProps {
  item: SwagItem;
}

export default function SwagDetailView({ item }: SwagDetailViewProps) {
  // Color selection
  const defaultColor = item.colors?.[0]?.name || "Default";
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);

  // Size selection
  const [selectedSize, setSelectedSize] = useState<SwagSize>(
    item.sizes?.[2] || "L"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"story" | "specs" | "sizing" | "faq">("story");
  const [showSizeModal, setShowSizeModal] = useState(false);

  // Cart & Checkout state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Current active preview image
  const currentColorOption = item.colors?.find((c) => c.name === selectedColor);
  const initialImage = currentColorOption?.image || item.image;
  const [activeImage, setActiveImage] = useState<string>(initialImage);

  // Update active image when color changes
  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    const found = item.colors?.find((c) => c.name === colorName);
    if (found) {
      setActiveImage(found.image);
    }
  };

  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3200);
  };

  const handleAddToCart = (immediateCheckout: boolean = false) => {
    const size = item.sizes ? selectedSize : undefined;
    const color = item.colors ? selectedColor : undefined;
    const cartItemId = `${item.id}-${color || "default"}-${size || "default"}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          swagId: item.id,
          name: item.name,
          priceNGN: item.priceNGN,
          size,
          color,
          quantity,
          image: activeImage,
        },
      ];
    });

    if (immediateCheckout) {
      setIsCheckoutOpen(true);
    } else {
      const desc = `${quantity}x ${item.name}${color ? ` (${color}` : ""}${size ? `${color ? ", " : " ("}${size}` : ""}${color || size ? ")" : ""}`;
      showToast(`Added ${desc} to your bag!`);
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === cartItemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  // Related recommended items
  const relatedItems = SWAG_ITEMS.filter((i) => i.id !== item.id).slice(0, 3);

  const galleryImages = item.gallery || [item.image];
  const isBlackTee = item.id === "tshirt" && selectedColor === "Black";

  return (
    <div className="w-full">
      {/* ── Toast Notification ───────────────────────────────────────── */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-3.5 rounded-full border-2 border-[#F5B82A] shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="text-[#F5B82A] text-lg">✓</span>
          <span className="font-akira font-black text-xs uppercase tracking-wider">
            {notification}
          </span>
        </div>
      )}

      {/* ── Top Breadcrumb & Bag Pill ─────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <nav className="flex items-center gap-2 text-xs font-akira font-bold text-gray-500 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/swag" className="hover:text-black transition-colors">
            SWAG STORE
          </Link>
          <span>/</span>
          <span className="text-black truncate max-w-[200px] sm:max-w-xs">
            {item.name}
          </span>
        </nav>

        {/* View Cart Button */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 font-akira text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all border-2 border-black cursor-pointer"
        >
          <span>🛒</span>
          <span>BAG</span>
          <span className="w-5 h-5 rounded-full bg-[#F5B82A] text-black font-black text-[11px] flex items-center justify-center">
            {cart.reduce((acc, i) => acc + i.quantity, 0)}
          </span>
        </button>
      </div>

      {/* ── Main Product Display Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        {/* ── Left Column: Media Gallery & Previews (7 cols) ─────────── */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Visual Box */}
          <div
            className={`relative w-full h-80 sm:h-[460px] rounded-3xl overflow-hidden border-4 border-black shadow-2xl flex items-center justify-center transition-colors duration-300 ${
              item.id === "tshirt" && selectedColor === "White"
                ? "bg-[#121214]"
                : item.id === "tshirt" && selectedColor === "Black"
                ? "bg-white"
                : item.id === "hoodie"
                ? "bg-white"
                : "bg-neutral-900"
            }`}
          >
            <Image
              src={activeImage}
              alt={item.name}
              fill
              priority
              className={`${
                item.id === "tshirt" || item.id === "hoodie"
                  ? "object-contain p-6"
                  : "object-cover"
              } transition-transform duration-500 hover:scale-105`}
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-black text-white px-3.5 py-1 rounded-full text-[10px] font-akira uppercase tracking-wider border border-white/20 shadow-md">
                {item.category}
              </span>
              {item.badge && (
                <span className="bg-[#F5B82A] text-black px-3.5 py-1 rounded-full text-[10px] font-akira font-black uppercase tracking-wider border-2 border-black shadow-md">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-medium border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Event-Day Pickup Guaranteed</span>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {galleryImages.map((imgUrl, idx) => {
                const isActive = activeImage === imgUrl;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "border-black scale-105 shadow-md ring-2 ring-black ring-offset-2"
                        : "border-black/20 hover:border-black opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Gallery thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Right Column: Product Meta, Selectors & Buy (5 cols) ───── */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Tagline & Title */}
            <div>
              <p className="text-xs font-akira font-bold text-google-blue uppercase tracking-widest mb-1">
                DEVFEST PORT HARCOURT 2026
              </p>
              <h1 className="font-akira font-black text-2xl sm:text-4xl text-black tracking-tight uppercase leading-tight">
                {item.name}
              </h1>
            </div>

            {/* Price Badge */}
            <div className="flex items-center gap-3">
              <span className="font-akira font-black text-2xl sm:text-3xl text-black">
                ₦{item.priceNGN.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Official Merch
              </span>
            </div>

            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              {item.description}
            </p>

            {/* Color Selector (if applicable) */}
            {item.colors && item.colors.length > 0 && (
              <div className="pt-2 border-t border-black/10">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-akira font-black uppercase text-gray-900">
                    Color:
                  </label>
                  <span className="text-xs font-bold text-google-blue">
                    {selectedColor}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.colors.map((clr) => {
                    const isSelected = selectedColor === clr.name;
                    return (
                      <button
                        key={clr.name}
                        type="button"
                        onClick={() => handleColorSelect(clr.name)}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-akira font-black text-xs uppercase transition-all border-2 cursor-pointer ${
                          isSelected
                            ? "bg-black text-[#F5B82A] border-black shadow-md scale-105"
                            : "bg-white text-gray-800 border-black/20 hover:border-black"
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-black/30 shadow-sm"
                          style={{ backgroundColor: clr.hex }}
                        />
                        <span>{clr.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector (if applicable) */}
            {item.sizes && (
              <div className="pt-2 border-t border-black/10">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-akira font-black uppercase text-gray-900">
                    Size:
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowSizeModal(true)}
                    className="text-xs font-bold text-google-blue underline hover:text-blue-700 cursor-pointer"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.sizes.map((sz) => {
                    const isSelected = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`w-12 h-12 rounded-xl font-akira font-black text-xs transition-all border-2 cursor-pointer ${
                          isSelected
                            ? "bg-black text-[#F5B82A] border-black shadow-md scale-105"
                            : "bg-white text-gray-800 border-black/20 hover:border-black"
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div className="pt-2 border-t border-black/10 flex items-center justify-between">
              <label className="text-xs font-akira font-black uppercase text-gray-900">
                Quantity:
              </label>
              <div className="flex items-center gap-3 bg-white rounded-full border-2 border-black px-3 py-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-6 h-6 rounded-full hover:bg-gray-100 font-black text-sm flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-akira font-black text-sm px-2 text-black">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-6 h-6 rounded-full hover:bg-gray-100 font-black text-sm flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-black/10">
            <button
              type="button"
              onClick={() => handleAddToCart(false)}
              className="w-full py-4 rounded-full bg-white text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-gray-100 transition-all hover:scale-[1.01] shadow-md text-center cursor-pointer active:scale-95"
            >
              ADD TO BAG (₦{(item.priceNGN * quantity).toLocaleString()})
            </button>

            <button
              type="button"
              onClick={() => handleAddToCart(true)}
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.01] shadow-xl text-center cursor-pointer active:scale-95"
            >
              BUY NOW WITH PAYSTACK →
            </button>

            {/* Event Pickup Note Box */}
            <div className="bg-[#18181B] text-white rounded-2xl p-4 border border-black/10 text-xs space-y-1 mt-3">
              <div className="flex items-center gap-2 text-[#F5B82A] font-akira font-bold uppercase text-[11px]">
                <span>📍</span>
                <span>EVENT-DAY COLLECTION</span>
              </div>
              <p className="text-gray-300 font-medium leading-relaxed">
                Pick up at the official <strong className="text-white">DevFest Port Harcourt Swag Booth</strong> on <strong className="text-white">November 28, 2026</strong>. Instant digital pass provided upon checkout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Deep Dive Details Tabs ─────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-black shadow-2xl mb-16">
        {/* Tab Headers */}
        <div className="flex flex-wrap gap-2 sm:gap-4 border-b-2 border-black/10 pb-4 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("story")}
            className={`px-5 py-2.5 rounded-full font-akira font-bold text-xs uppercase tracking-wider transition-all border-2 ${
              activeTab === "story"
                ? "bg-black text-[#F5B82A] border-black shadow-md"
                : "bg-white text-gray-700 border-black/15 hover:border-black"
            }`}
          >
            OVERVIEW &amp; STORY
          </button>

          {item.packageIncludes && item.packageIncludes.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-2.5 rounded-full font-akira font-bold text-xs uppercase tracking-wider transition-all border-2 ${
                activeTab === "specs"
                  ? "bg-black text-[#F5B82A] border-black shadow-md"
                  : "bg-white text-gray-700 border-black/15 hover:border-black"
              }`}
            >
              PACKAGE CONTENTS ({item.packageIncludes.length})
            </button>
          )}

          {item.specifications && (
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-2.5 rounded-full font-akira font-bold text-xs uppercase tracking-wider transition-all border-2 ${
                activeTab === "specs" && !item.packageIncludes
                  ? "bg-black text-[#F5B82A] border-black shadow-md"
                  : "bg-white text-gray-700 border-black/15 hover:border-black"
              }`}
            >
              SPECIFICATIONS
            </button>
          )}

          {item.sizes && (
            <button
              type="button"
              onClick={() => setActiveTab("sizing")}
              className={`px-5 py-2.5 rounded-full font-akira font-bold text-xs uppercase tracking-wider transition-all border-2 ${
                activeTab === "sizing"
                  ? "bg-black text-[#F5B82A] border-black shadow-md"
                  : "bg-white text-gray-700 border-black/15 hover:border-black"
              }`}
            >
              SIZING CHART
            </button>
          )}

          <button
            type="button"
            onClick={() => setActiveTab("faq")}
            className={`px-5 py-2.5 rounded-full font-akira font-bold text-xs uppercase tracking-wider transition-all border-2 ${
              activeTab === "faq"
                ? "bg-black text-[#F5B82A] border-black shadow-md"
                : "bg-white text-gray-700 border-black/15 hover:border-black"
            }`}
          >
            FAQS &amp; PICKUP
          </button>
        </div>

        {/* Tab 1: Story / Long Description */}
        {activeTab === "story" && (
          <div className="space-y-6 max-w-4xl">
            <h3 className="font-akira font-black text-xl sm:text-2xl text-black uppercase">
              ABOUT THIS ITEM
            </h3>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
              {item.longDescription || item.description}
            </p>

            {/* Feature Checkpoints */}
            <div className="pt-4">
              <h4 className="font-akira font-bold text-xs uppercase text-gray-600 mb-3">
                KEY HIGHLIGHTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-black/10 text-xs sm:text-sm font-bold text-gray-900"
                  >
                    <span className="text-google-blue font-black text-base">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care instructions if apparel */}
            {item.careInstructions && (
              <div className="pt-4 border-t border-black/10">
                <h4 className="font-akira font-bold text-xs uppercase text-gray-600 mb-2">
                  GARMENT CARE:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 font-medium">
                  {item.careInstructions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Package Contents & Specs */}
        {activeTab === "specs" && (
          <div className="space-y-8 max-w-4xl">
            {/* Package Items Grid */}
            {item.packageIncludes && (
              <div>
                <h3 className="font-akira font-black text-xl text-black uppercase mb-4">
                  WHAT&apos;S IN THE BOX
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.packageIncludes.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FAF7EE] border-2 border-black flex gap-4 items-start shadow-sm"
                    >
                      <span className="text-3xl shrink-0">{p.icon}</span>
                      <div>
                        <h4 className="font-akira font-bold text-xs uppercase text-black mb-1">
                          {p.name}
                        </h4>
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Table */}
            {item.specifications && (
              <div>
                <h3 className="font-akira font-black text-xl text-black uppercase mb-4">
                  TECHNICAL SPECIFICATIONS
                </h3>
                <div className="border-2 border-black rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody>
                      {Object.entries(item.specifications).map(
                        ([key, val], idx) => (
                          <tr
                            key={key}
                            className={`border-b border-black/10 ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="p-4 font-akira font-bold text-gray-700 w-1/3">
                              {key}
                            </td>
                            <td className="p-4 font-medium text-black">
                              {val}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Sizing Chart */}
        {activeTab === "sizing" && (
          <div className="space-y-6 max-w-3xl">
            <h3 className="font-akira font-black text-xl text-black uppercase">
              MEASUREMENT &amp; SIZING GUIDE
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm font-medium">
              All garments are tailored with a modern unisex standard fit. If you prefer a loose / oversized streetwear aesthetic, we recommend ordering one size up.
            </p>

            <div className="border-2 border-black rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-black text-white font-akira text-[11px] uppercase">
                    <th className="p-3.5">SIZE</th>
                    <th className="p-3.5">CHEST (INCHES)</th>
                    <th className="p-3.5">LENGTH (INCHES)</th>
                    <th className="p-3.5">CHEST (CM)</th>
                  </tr>
                </thead>
                <tbody className="font-medium text-black">
                  <tr className="border-b border-black/10 bg-white">
                    <td className="p-3 font-akira font-black">S</td>
                    <td className="p-3">36 - 38&quot;</td>
                    <td className="p-3">28&quot;</td>
                    <td className="p-3">91 - 96 cm</td>
                  </tr>
                  <tr className="border-b border-black/10 bg-gray-50">
                    <td className="p-3 font-akira font-black">M</td>
                    <td className="p-3">39 - 41&quot;</td>
                    <td className="p-3">29&quot;</td>
                    <td className="p-3">99 - 104 cm</td>
                  </tr>
                  <tr className="border-b border-black/10 bg-white">
                    <td className="p-3 font-akira font-black">L</td>
                    <td className="p-3">42 - 44&quot;</td>
                    <td className="p-3">30&quot;</td>
                    <td className="p-3">107 - 112 cm</td>
                  </tr>
                  <tr className="border-b border-black/10 bg-gray-50">
                    <td className="p-3 font-akira font-black">XL</td>
                    <td className="p-3">45 - 47&quot;</td>
                    <td className="p-3">31&quot;</td>
                    <td className="p-3">114 - 119 cm</td>
                  </tr>
                  <tr className="border-b border-black/10 bg-white">
                    <td className="p-3 font-akira font-black">2XL</td>
                    <td className="p-3">48 - 50&quot;</td>
                    <td className="p-3">32&quot;</td>
                    <td className="p-3">122 - 127 cm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-akira font-black">3XL</td>
                    <td className="p-3">51 - 53&quot;</td>
                    <td className="p-3">33&quot;</td>
                    <td className="p-3">130 - 135 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Pickup & FAQs */}
        {activeTab === "faq" && (
          <div className="space-y-4 max-w-3xl">
            <h3 className="font-akira font-black text-xl text-black uppercase mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-gray-50 border border-black/10 space-y-1">
                <h4 className="font-akira font-bold text-black uppercase">
                  Where and when do I collect my order?
                </h4>
                <p className="text-gray-700 font-medium">
                  You collect your swags on event day (November 28th, 2026) at the official DevFest Port Harcourt merchandise booth inside the main venue hall.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-black/10 space-y-1">
                <h4 className="font-akira font-bold text-black uppercase">
                  Can I exchange sizes at the venue desk?
                </h4>
                <p className="text-gray-700 font-medium">
                  Yes, size exchanges are accommodated subject to remaining on-site stock availability. We strongly advise choosing your exact size now to guarantee allocation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-black/10 space-y-1">
                <h4 className="font-akira font-bold text-black uppercase">
                  Can a friend or colleague pick up on my behalf?
                </h4>
                <p className="text-gray-700 font-medium">
                  Yes! Simply share your Order Reference or Digital Pickup Pass barcode with them to present at the desk.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Related Merchandise Recommendations ────────────────────────────── */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-akira font-black text-xl sm:text-2xl text-black uppercase">
            YOU MAY ALSO LIKE
          </h3>
          <Link
            href="/swag"
            className="text-xs font-akira font-bold text-google-blue uppercase hover:underline"
          >
            VIEW ALL MERCH →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedItems.map((rel) => (
            <Link
              key={rel.id}
              href={`/swag/${rel.id}`}
              className="bg-white rounded-3xl p-5 border-2 border-black shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 mb-4">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    className={`${
                      rel.id === "tshirt" || rel.id === "hoodie"
                        ? "object-contain p-2 bg-white"
                        : "object-cover"
                    }`}
                  />
                </div>
                <h4 className="font-akira font-black text-sm text-black uppercase mb-1">
                  {rel.name}
                </h4>
                <p className="text-gray-600 text-xs font-medium line-clamp-2 mb-3">
                  {rel.tagline}
                </p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-black/10">
                <span className="font-akira font-black text-sm text-black">
                  ₦{rel.priceNGN.toLocaleString()}
                </span>
                <span className="text-xs font-akira font-bold text-google-blue">
                  VIEW →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Size Guide Modal ──────────────────────────────────────────────── */}
      {showSizeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setShowSizeModal(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border-4 border-black text-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSizeModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>
            <h3 className="font-akira font-black text-lg uppercase mb-2">
              SIZE GUIDE (INCHES &amp; CM)
            </h3>
            <p className="text-xs text-gray-600 mb-4 font-medium">
              Measure around the fullest part of your chest, keeping tape horizontal.
            </p>
            <div className="border-2 border-black rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-black text-white font-akira text-[10px]">
                  <tr>
                    <th className="p-2.5">SIZE</th>
                    <th className="p-2.5">CHEST (IN)</th>
                    <th className="p-2.5">LENGTH (IN)</th>
                  </tr>
                </thead>
                <tbody className="font-medium">
                  <tr className="border-b border-black/10"><td className="p-2 font-bold">S</td><td className="p-2">36 - 38&quot;</td><td className="p-2">28&quot;</td></tr>
                  <tr className="border-b border-black/10 bg-gray-50"><td className="p-2 font-bold">M</td><td className="p-2">39 - 41&quot;</td><td className="p-2">29&quot;</td></tr>
                  <tr className="border-b border-black/10"><td className="p-2 font-bold">L</td><td className="p-2">42 - 44&quot;</td><td className="p-2">30&quot;</td></tr>
                  <tr className="border-b border-black/10 bg-gray-50"><td className="p-2 font-bold">XL</td><td className="p-2">45 - 47&quot;</td><td className="p-2">31&quot;</td></tr>
                  <tr className="border-b border-black/10"><td className="p-2 font-bold">2XL</td><td className="p-2">48 - 50&quot;</td><td className="p-2">32&quot;</td></tr>
                  <tr className="bg-gray-50"><td className="p-2 font-bold">3XL</td><td className="p-2">51 - 53&quot;</td><td className="p-2">33&quot;</td></tr>
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setShowSizeModal(false)}
              className="mt-5 w-full py-3 rounded-full bg-black text-white font-akira text-xs uppercase"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}

      {/* ── Slide-over Cart Drawer ────────────────────────────────────────── */}
      <SwagCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* ── Checkout Modal ───────────────────────────────────────────────── */}
      <SwagCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={(order: SwagOrder) => {
          setCart([]);
          setIsCheckoutOpen(false);
        }}
      />
    </div>
  );
}

