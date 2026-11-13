// ─────────────────────────────────────────────────────────────────────────────
// components/SpeakersCarousel.tsx
// Interactive horizontal scroll carousel for featured speakers on the homepage
// Features: Auto-play, mouse drag & touch swipe, smooth looping navigation,
// custom progress bar & slide counter, zero-scrollbar styling.
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Speaker } from "@/lib/types";
import SpeakerCard from "@/components/SpeakerCard";

interface SpeakersCarouselProps {
  speakers: Speaker[];
}

export default function SpeakersCarousel({ speakers }: SpeakersCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  // Update scroll progress & active slide index
  const updateProgress = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      setScrollProgress(progress);
    }

    const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24; // width + gap
      const current = Math.min(
        speakers.length,
        Math.max(1, Math.round(scrollLeft / cardWidth) + 1)
      );
      setActiveSlide(current);
    }
  }, [speakers.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      el.removeEventListener("scroll", updateProgress);
    };
  }, [updateProgress]);

  // Smooth scroll handler (with circular wrapping at edges)
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 24 : 330;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (direction === "right") {
      if (scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    } else {
      if (scrollLeft <= 20) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -step, behavior: "smooth" });
      }
    }
  };

  // Subtle auto-advance every 4 seconds (pauses on hover or drag)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement | null;
      const step = firstCard ? firstCard.offsetWidth + 24 : 330;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, isDragging]);

  // Mouse Drag-to-Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragStartScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.3;
    if (Math.abs(walk) > 6) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = dragStartScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    // Retain hasDragged briefly so card click handler doesn't trigger flip immediately on drag release
    setTimeout(() => {
      setHasDragged(false);
    }, 60);
  };

  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging) handleMouseUpOrLeave();
      }}
    >
      {/* ── Section Header with Navigation Arrows ──────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-google-blue/30 text-google-blue text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-google-blue animate-pulse" />
            World Class Keynotes
          </div>
          <h2 className="font-akira font-black text-3xl sm:text-5xl text-black tracking-tight uppercase leading-none">
            FEATURED SPEAKERS
          </h2>
        </div>

        {/* Carousel Navigation & View All */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous speakers"
            className="w-11 h-11 rounded-full bg-white border-2 border-black text-black flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
          >
            ←
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next speakers"
            className="w-11 h-11 rounded-full bg-white border-2 border-black text-black flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
          >
            →
          </button>

          <Link
            href="/speakers"
            className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-akira font-extrabold text-xs uppercase tracking-wider hover:bg-gray-800 transition-all hover:scale-105 shrink-0 shadow-md"
            id="home-view-all-speakers"
          >
            VIEW ALL SPEAKERS →
          </Link>
        </div>
      </div>

      {/* ── Horizontal Scrollable Cards Track (Carousel) ───────────────── */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className={`flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar ${
          isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth snap-x snap-mandatory"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            onClickCapture={(e) => {
              // Block card flip when user was dragging
              if (hasDragged) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
            className="w-[270px] sm:w-[300px] md:w-[320px] shrink-0 snap-start transition-transform duration-300 hover:-translate-y-1"
          >
            <SpeakerCard speaker={speaker} colorIndex={index} />
          </div>
        ))}
      </div>

      {/* ── Carousel Bottom Progress Bar & Indicator ───────────────────── */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
        {/* Active Slide Counter */}
        <div className="flex items-center gap-2">
          <span className="font-akira font-black text-xs text-black tracking-wider">
            {String(activeSlide).padStart(2, "0")}
          </span>
          <span className="text-gray-400 font-bold text-xs">/</span>
          <span className="font-sans font-bold text-xs text-gray-500 tracking-wide">
            {String(speakers.length).padStart(2, "0")} SPEAKERS
          </span>
        </div>

        {/* Custom Sleek Progress Track */}
        <div className="w-full sm:w-80 h-2 bg-black/10 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-google-blue rounded-full transition-all duration-200 ease-out"
            style={{ width: `${Math.max(8, scrollProgress)}%` }}
          />
        </div>

        {/* Interaction Hint */}
        <div className="hidden sm:flex items-center gap-2 text-gray-500 text-xs font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>DRAG OR USE ARROWS TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
