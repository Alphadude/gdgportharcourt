// ─────────────────────────────────────────────────────────────────────────────
// components/swag/SwagStoreView.tsx
// Interactive Swag Storefront with Color Switcher, Package Selector, Size Chooser & Cart Flow
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SWAG_ITEMS } from "@/lib/data/swags";
import { SwagItem, CartItem, SwagSize, SwagCategory, SwagOrder } from "@/lib/types/swag";
import SwagHero from "./SwagHero";
import SwagCartDrawer from "./SwagCartDrawer";
import SwagCheckoutModal from "./SwagCheckoutModal";

export default function SwagStoreView() {
  const searchParams = useSearchParams();
  const initialPackage = searchParams.get("package"); // 'standard' or 'pro'

  const [selectedCategory, setSelectedCategory] = useState<"all" | SwagCategory>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, SwagSize>>({
    hoodie: "L",
    tshirt: "L",
  });
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    tshirt: "White",
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Auto-scroll or handle deep link on initial load
  useEffect(() => {
    if (initialPackage) {
      const element = document.getElementById(`swag-item-${initialPackage}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [initialPackage]);

  // Flash notification helper
  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3200);
  };

  const handleSizeChange = (itemId: string, size: SwagSize) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const handleColorChange = (itemId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [itemId]: colorName }));
  };

  const handleAddToCart = (item: SwagItem, immediateCheckout: boolean = false) => {
    const size = item.sizes ? selectedSizes[item.id] || "L" : undefined;
    const colorOption = item.colors?.find(
      (c) => c.name === (selectedColors[item.id] || item.colors?.[0]?.name)
    );
    const color = colorOption?.name;
    const itemImage = colorOption?.image || item.image;
    const cartItemId = `${item.id}-${color || "default"}-${size || "default"}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
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
          quantity: 1,
          image: itemImage,
        },
      ];
    });

    if (immediateCheckout) {
      setIsCheckoutOpen(true);
    } else {
      const desc = `${item.name}${color ? ` (${color}` : ""}${size ? `${color ? ", " : " ("}${size}` : ""}${color || size ? ")" : ""}`;
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

  const filteredItems = SWAG_ITEMS.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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

      {/* ── Hero / Filter Header ─────────────────────────────────────── */}
      <SwagHero
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* ── Merchandise Grid ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredItems.map((item) => {
          const isDeepLinked = initialPackage === item.id;
          const selectedSize = selectedSizes[item.id] || "L";
          const currentColorOption = item.colors?.find(
            (c) => c.name === (selectedColors[item.id] || item.colors?.[0]?.name)
          );
          const displayedImage = currentColorOption?.image || item.image;

          return (
            <div
              key={item.id}
              id={`swag-item-${item.id}`}
              className={`rounded-3xl p-6 sm:p-7 border-4 text-black shadow-2xl flex flex-col justify-between transition-all duration-300 relative ${
                item.borderColor
                  ? `border-[${item.borderColor}]`
                  : "border-black"
              } ${
                item.accentColor
                  ? `bg-[${item.accentColor}]`
                  : "bg-white"
              } ${
                isDeepLinked ? "ring-4 ring-offset-4 ring-google-blue" : ""
              }`}
              style={{
                backgroundColor: item.accentColor || "#FFFFFF",
                borderColor: item.borderColor || "#000000",
              }}
            >
              {/* Optional Popular Badge */}
              {item.badge && (
                <div className="absolute -top-3.5 right-6 bg-black text-yellow-400 font-akira text-[10px] font-black uppercase px-3 py-1 rounded-full border-2 border-[#F5B82A] shadow-md tracking-wider">
                  {item.badge}
                </div>
              )}

              <div>
                {/* Visual Header / Image preview */}
                <div
                  className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border-2 border-black shadow-md transition-colors duration-300 ${
                    item.id === "tshirt" && currentColorOption?.name === "White"
                      ? "bg-[#121214]"
                      : item.id === "tshirt" && currentColorOption?.name === "Black"
                      ? "bg-white"
                      : item.id === "hoodie"
                      ? "bg-white"
                      : "bg-neutral-900"
                  }`}
                >
                  <Image
                    src={displayedImage}
                    alt={`${item.name} ${currentColorOption?.name || ""}`}
                    fill
                    className={`${
                      item.id === "tshirt" || item.id === "hoodie"
                        ? "object-contain p-3"
                        : "object-cover"
                    } hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-akira uppercase border border-white/20">
                    {item.category}
                  </div>

                  {currentColorOption && (
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-akira uppercase border border-white/20 flex items-center gap-1.5 shadow-sm">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-white/40"
                        style={{ backgroundColor: currentColorOption.hex }}
                      />
                      <span>{currentColorOption.name}</span>
                    </div>
                  )}
                </div>

                {/* Name & Pricing Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <Link
                    href={`/swag/${item.id}`}
                    className="hover:text-google-blue transition-colors group"
                  >
                    <h3 className="font-akira font-black text-xl sm:text-2xl text-black group-hover:text-google-blue uppercase tracking-tight">
                      {item.name}
                    </h3>
                  </Link>
                  <span className="font-akira font-black text-base sm:text-lg text-black bg-white/80 px-3.5 py-1 rounded-full border border-black/15 shadow-sm">
                    ₦{item.priceNGN.toLocaleString()}
                  </span>
                </div>

                <p className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="mb-6 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-black/10">
                  <p className="text-[10px] font-akira font-bold uppercase text-gray-600 mb-2.5">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm font-bold text-gray-900">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="text-google-blue font-black text-sm">
                          →
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Color Selection (if applicable) */}
                {item.colors && item.colors.length > 0 && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-akira font-black uppercase text-gray-900">
                        SELECT COLOR:
                      </label>
                      <span className="text-xs font-bold text-google-blue">
                        Current: {currentColorOption?.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {item.colors.map((clr) => {
                        const isCurrentColor = currentColorOption?.name === clr.name;
                        return (
                          <button
                            key={clr.name}
                            type="button"
                            onClick={() => handleColorChange(item.id, clr.name)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-akira font-black text-xs uppercase transition-all border-2 cursor-pointer ${
                              isCurrentColor
                                ? "bg-black text-[#F5B82A] border-black shadow-md scale-105"
                                : "bg-white text-gray-800 border-black/20 hover:border-black"
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-sm"
                              style={{ backgroundColor: clr.hex }}
                            />
                            <span>{clr.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Size Selection (if applicable) */}
                {item.sizes && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-akira font-black uppercase text-gray-900">
                        SELECT SIZE:
                      </label>
                      <span className="text-xs font-bold text-google-blue">
                        Current: {selectedSize}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((sz) => {
                        const isCurrent = selectedSize === sz;
                        return (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => handleSizeChange(item.id, sz)}
                            className={`w-11 h-11 rounded-xl font-akira font-black text-xs transition-all border-2 ${
                              isCurrent
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
                {/* View Details Link */}
                <div className="pt-2 text-right">
                  <Link
                    href={`/swag/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-akira font-bold text-google-blue hover:text-blue-700 uppercase tracking-wider transition-colors"
                  >
                    <span>VIEW FULL DETAILS &amp; SPECS</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-black/10">
                <button
                  type="button"
                  onClick={() => handleAddToCart(item, false)}
                  className="flex-1 py-3.5 px-6 rounded-full bg-white text-black font-akira font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-gray-100 transition-all hover:scale-[1.01] shadow-sm text-center cursor-pointer active:scale-95"
                >
                  ADD TO BAG +
                </button>
                <button
                  type="button"
                  onClick={() => handleAddToCart(item, true)}
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.01] shadow-md text-center cursor-pointer active:scale-95"
                >
                  BUY NOW →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Slide-over Cart Drawer ───────────────────────────────────── */}
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

      {/* ── Checkout Modal ──────────────────────────────────────────── */}
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
