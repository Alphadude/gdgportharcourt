// ─────────────────────────────────────────────────────────────────────────────
// components/MemoryLaneSection.tsx
// Memory Lane section with an expanded, interactive multi-image carousel
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const MEMORY_IMAGES = [
  {
    src: "public/devfest-2025/community.jpg",
    alt: "DevFest Port Harcourt Audience & Keynote",
    title: "Electric Community Energy",
    caption: "Over 1,500+ developers, tech enthusiasts & founders in Port Harcourt",
    tag: "Mainstage",
  },
  {
    src: "public/devfest-2025/memories.jpg",
    alt: "DevFest Port Harcourt Organizing Team",
    title: "The Organizing Superstars",
    caption: "The passionate core team and leads bringing DevFest to life",
    tag: "Organizers",
  },
  {
    src: "public/devfest-2025/energy.jpg",
    alt: "DevFest Keynotes & Tech Sessions",
    title: "World-Class Tech Sessions",
    caption: "Deep-dives into AI, Cloud, Mobile, Web & Open Source",
    tag: "Workshops",
  },
  {
    src: "public/devfest-2025/speaker.jpg",
    alt: "DevFest Community & Volunteers",
    title: "Vibrant Tech Community",
    caption: "Connecting creators, networking, and building lasting friendships",
    tag: "Community",
  },
  {
    src: "public/devfest-2025/highlights.jpg",
    alt: "DevFest Festival Highlights",
    title: "Unforgettable Memories",
    caption: "A celebration of innovation, culture, and tech excellence",
    tag: "Highlights",
  },
  {
    src: "public/devfest-2025/femalespeakers.jpg",
    alt: "DevFest Festival Highlights",
    title: "Unforgettable Memories",
    caption: "A celebration of women in tech",
    tag: "Women in Tech",
  },
  {
    src: "public/devfest-2025/girls.jpg",
    alt: "DevFest Festival Highlights",
    title: "Unforgettable Memories",
    caption: "A celebration of girls in tech",
    tag: "Girls in Tech",
  },
  {
    src: "public/devfest-2025/group.jpg",
    alt: "DevFest Festival Highlights",
    title: "Unforgettable Memories",
    caption: "A celebration of community and innovation",
    tag: "Community",
  },
];

export default function MemoryLaneSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % MEMORY_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + MEMORY_IMAGES.length) % MEMORY_IMAGES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="bg-[#FAF7EE] text-black pt-20 sm:pt-28 pb-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Left Column: Heading, Subtitle & CTAs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5B82A]/20 border border-[#F5B82A] text-black font-akira font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F5B82A] animate-pulse" />
            Recap & Highlights
          </div>

          <h2 className="font-akira font-black text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-black tracking-tight uppercase leading-[0.95]">
            LET&apos;S TAKE YOU DOWN
            <br />
            MEMORY LANE
          </h2>

          <p className="text-gray-800 font-sans text-sm sm:text-base leading-relaxed max-w-lg font-medium">
            DevFest Port Harcourt 2025 was unforgettable. A time was thoroughly had and no be by cho cho cho, we have receipts.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://www.youtube.com/watch?v=2KGk2PXq1sY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#F5B82A] text-black font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-md border-2 border-black"
            >
              WATCH 2025 RECAP
            </a>

            <a
              href="https://photos.app.goo.gl/P3e2dAzXQEekQVWRA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#18181B] text-white font-akira font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-800 transition-all hover:scale-105 shadow-md border-2 border-black"
            >
              VIEW 2025 PHOTOS
            </a>
          </div>

          {/* Quick Stats / Highlights Pill Row */}
          <div className="pt-4 flex items-center gap-6 border-t border-black/10">
            <div>
              <p className="font-akira font-black text-xl sm:text-2xl text-black">1,500+</p>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">Attendees</p>
            </div>
            <div className="h-8 w-px bg-black/15" />
            <div>
              <p className="font-akira font-black text-xl sm:text-2xl text-[#185c37]">20+</p>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">Speakers</p>
            </div>
            <div className="h-8 w-px bg-black/15" />
            <div>
              <p className="font-akira font-black text-xl sm:text-2xl text-[#3B82F6]">100%</p>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">Vibes</p>
            </div>
          </div>
        </div>

        {/* Right Column: Expanded Carousel Container with Road Graphic */}
        <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
          {/* Perspective Yellow Road SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0 opacity-80">
            <svg viewBox="0 0 500 500" fill="none" className="w-full h-full max-h-[550px]">
              {/* Left yellow road border */}
              <path d="M 230 0 L 60 500" stroke="#F5B82A" strokeWidth="4" opacity="0.6" />
              {/* Right yellow road border */}
              <path d="M 270 0 L 440 500" stroke="#F5B82A" strokeWidth="4" opacity="0.6" />
              {/* Center dashed lane divider */}
              <path d="M 250 0 L 250 500" stroke="#F5B82A" strokeWidth="3" strokeDasharray="14 14" opacity="0.5" />
            </svg>
          </div>

          {/* Carousel Card Container (Increased Size) */}
          <div
            className="relative z-10 w-full max-w-2xl rounded-3xl border-4 border-black bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Viewfinder Bar */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>REC • {MEMORY_IMAGES[currentIndex].tag}</span>
              </div>

              {/* Counter Badge */}
              <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-akira text-xs font-bold tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")} / {String(MEMORY_IMAGES.length).padStart(2, "0")}
              </div>
            </div>

            {/* Slider Track (Aspect Ratio 16/10 for large prominent photos) */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <div
                className="flex h-full w-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {MEMORY_IMAGES.map((image, index) => (
                  <div key={index} className="relative h-full w-full shrink-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                      className="object-cover object-center select-none"
                    />
                    {/* Gradient Overlay for bottom text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Active Image Title & Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-20 text-white pointer-events-none">
                <h3 className="font-akira font-black text-lg sm:text-2xl text-white tracking-tight uppercase mb-1">
                  {MEMORY_IMAGES[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                  {MEMORY_IMAGES[currentIndex].caption}
                </p>
              </div>

              {/* Left Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous photo"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-black border-2 border-black flex items-center justify-center font-bold text-lg shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next photo"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-black border-2 border-black flex items-center justify-center font-bold text-lg shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Control Bar / Indicators */}
            <div className="bg-[#18181B] px-6 py-4 flex items-center justify-between border-t-2 border-white/10">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {MEMORY_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index
                        ? "w-8 bg-[#F5B82A]"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>

              {/* Autoplay status hint */}
              <p className="text-white/60 text-xs font-mono font-medium hidden sm:block">
                {isPaused ? "⏸ PAUSED" : "▶ AUTO-SLIDE"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
