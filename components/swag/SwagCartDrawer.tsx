// ─────────────────────────────────────────────────────────────────────────────
// components/swag/SwagCartDrawer.tsx
// Slide-over cart drawer for DevFest Swag Store
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CartItem } from "@/lib/types/swag";

interface SwagCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export default function SwagCartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}: SwagCartDrawerProps) {
  // ESC key listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const subtotalNGN = items.reduce(
    (acc, item) => acc + item.priceNGN * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer Body */}
      <aside
        className="relative w-full max-w-md bg-[#18181B] text-white h-full shadow-2xl flex flex-col z-10 border-l border-white/10 transform transition-transform duration-300"
        aria-label="Your Swag Cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xl">🛍️</span>
            <h2 className="font-akira font-black text-sm uppercase tracking-wider text-white">
              YOUR SWAG BAG ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="text-5xl">🎒</div>
              <p className="font-akira text-sm uppercase text-gray-400">
                Your swag bag is empty
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Add an official DevFest Port Harcourt package or merch item to get started!
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#F5B82A] text-black font-akira text-xs font-bold uppercase hover:bg-yellow-400 transition-all"
              >
                BROWSE MERCH
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#242428] rounded-2xl p-4 border border-white/10 flex gap-4 items-center justify-between"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 relative border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-akira font-bold text-xs text-white truncate">
                    {item.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-[11px] mt-0.5">
                    {item.color && (
                      <span className="text-gray-300 font-bold">
                        Color: <strong className="text-white">{item.color}</strong>
                      </span>
                    )}
                    {item.size && (
                      <span className="text-[#F5B82A] font-bold">
                        Size: {item.size}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-black text-gray-300 mt-1">
                    ₦{item.priceNGN.toLocaleString()} each
                  </p>
                </div>

                {/* Quantity Controls & Delete */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-400 text-xs transition-colors p-1"
                    title="Remove item"
                  >
                    ✕
                  </button>
                  <div className="flex items-center gap-2 bg-black/40 rounded-full px-2 py-1 border border-white/10 text-xs">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-5 h-5 rounded-full hover:bg-white/20 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-bold text-xs px-1 text-white">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-5 h-5 rounded-full hover:bg-white/20 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#1F1F23] space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                <span>Pickup Location:</span>
                <span className="text-white font-bold">DevFest PH Venue Desk</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-white pt-2 border-t border-white/10">
                <span className="font-akira">TOTAL:</span>
                <span className="font-akira font-black text-lg text-[#F5B82A]">
                  ₦{subtotalNGN.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onProceedToCheckout}
              className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-xl text-center cursor-pointer active:scale-95"
            >
              CHECKOUT NOW →
            </button>

            <p className="text-[11px] text-gray-400 text-center font-medium">
              Free event admission • Instant pickup pass generated upon checkout
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}

