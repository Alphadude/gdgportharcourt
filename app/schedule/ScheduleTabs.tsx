// ─────────────────────────────────────────────────────────────────────────────
// app/schedule/ScheduleTabs.tsx
// Client Component — Tabbed Schedule switcher with authentic DevFest layout
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { Session, Speaker } from "@/lib/types";
import SessionCard from "@/components/SessionCard";
import {
  DAY_LABELS,
  DAY_TITLES,
  DAY_DESCRIPTIONS,
  DAY_BG_COLORS,
} from "@/lib/data/sessions";

interface ScheduleTabsProps {
  sessionsByDay: Record<number, Session[]>;
  allSpeakers: Speaker[];
}

export default function ScheduleTabs({
  sessionsByDay,
  allSpeakers,
}: ScheduleTabsProps) {
  const days = Object.keys(sessionsByDay).map(Number).sort((a, b) => a - b);
  const [activeDay, setActiveDay] = useState<number>(days[0] ?? 1);

  // Speaker lookup map
  const speakerMap = Object.fromEntries(allSpeakers.map((sp) => [sp.id, sp]));

  const currentSessions = sessionsByDay[activeDay] ?? [];
  const activeBgTheme = DAY_BG_COLORS[activeDay] ?? DAY_BG_COLORS[1];
  const activeTitle = DAY_TITLES[activeDay] ?? "CONFERENCE DAY";
  const activeDescription =
    DAY_DESCRIPTIONS[activeDay] ??
    "Join tech enthusiasts, engineers, and creators for inspiring keynotes and sessions.";

  return (
    <div className="w-full">
      {/* ── Day Selector Tabs ────────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Schedule Days"
        className="flex items-end gap-1.5 sm:gap-3 overflow-x-auto scrollbar-none px-2 sm:px-4"
      >
        {days.map((day) => {
          const isActive = day === activeDay;
          const theme = DAY_BG_COLORS[day] ?? DAY_BG_COLORS[1];

          return (
            <button
              key={day}
              role="tab"
              aria-selected={isActive}
              aria-controls={`day-panel-${day}`}
              id={`day-tab-${day}`}
              onClick={() => setActiveDay(day)}
              className={`shrink-0 font-akira font-black text-sm sm:text-lg md:text-xl tracking-wider uppercase px-5 sm:px-8 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl transition-all duration-200 cursor-pointer ${
                theme.tabBg
              } ${
                isActive
                  ? "text-black shadow-sm relative z-10 opacity-100 scale-100"
                  : "text-black/60 hover:text-black hover:opacity-100 opacity-80 scale-95"
              }`}
            >
              {DAY_LABELS[day] ?? `DAY ${day}`}
            </button>
          );
        })}
      </div>

      {/* ── Main Schedule Content Card ────────────────────────────────────── */}
      <div
        role="tabpanel"
        id={`day-panel-${activeDay}`}
        aria-labelledby={`day-tab-${activeDay}`}
        className={`w-full ${activeBgTheme.contentBg} rounded-b-[2rem] sm:rounded-b-[3rem] rounded-tr-[2rem] sm:rounded-tr-[3rem] p-6 sm:p-10 lg:p-12 shadow-xl border border-black/10 transition-colors duration-300`}
      >
        {/* Banner Subheader inside Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 sm:mb-12">
          {/* Left Title */}
          <div>
            <h2
              className={`font-akira font-black text-3xl sm:text-5xl lg:text-6xl ${activeBgTheme.titleColor} tracking-tight uppercase leading-none`}
            >
              {activeTitle}
            </h2>
          </div>

          {/* Right Description & Free Registration Pill */}
          <div className="max-w-md flex flex-col items-start md:items-end text-left md:text-right gap-3">
            <p className="text-gray-800 text-sm font-medium leading-relaxed">
              {activeDescription}
            </p>
            <a
              href="https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-devfest-port-harcourt-2026/cohost-gdg-port-harcourt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#F5B82A] text-black font-akira text-xs font-bold border-2 border-black hover:bg-yellow-400 transition-all hover:scale-105 shadow-sm uppercase tracking-wider"
            >
              FREE REGISTRATION
            </a>
          </div>
        </div>

        {/* Sessions Cards List - Replaced with Coming Soon */}
        <div className="bg-white rounded-3xl p-16 sm:p-24 text-center shadow-sm border border-black/5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-google-blue/10 mb-6">
            <span className="text-3xl">🗓️</span>
          </div>
          <h3 className="font-akira font-black text-2xl sm:text-4xl text-black tracking-tight uppercase mb-4">
            Schedule Coming Soon
          </h3>
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto font-medium">
            We are curating an amazing lineup of sessions and workshops for this day. Stay tuned for the full breakdown!
          </p>
        </div>
      </div>
    </div>
  );
}
