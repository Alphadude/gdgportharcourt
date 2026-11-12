// ─────────────────────────────────────────────────────────────────────────────
// app/schedule/page.tsx
// Schedule page — Server Component
// Multi-day tabbed schedule for DevFest Port Harcourt 2026
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { sessions, DAY_LABELS } from "@/lib/data/sessions";
import { speakers } from "@/lib/data/speakers";
import ScheduleTabs from "./ScheduleTabs";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Browse the DevFest Port Harcourt 2026 schedule — keynotes, talks, workshops, and technical sessions across 20+ tracks.",
  alternates: {
    canonical: "/schedule",
  },
};

function parseTimeToMinutes(timeStr: string): number {
  const match = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export default function SchedulePage() {
  // Pre-group sessions by day in chronological order
  const sessionsByDay = Object.fromEntries(
    Object.keys(DAY_LABELS).map((day) => {
      const dayNum = Number(day);
      const daySessions = sessions
        .filter((s) => s.day === dayNum)
        .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));
      return [dayNum, daySessions];
    })
  );

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      {/* ── Tabbed schedule (Client Component) ──────────────────────── */}
      <ScheduleTabs
        sessionsByDay={sessionsByDay}
        allSpeakers={speakers}
      />
    </div>
  );
}
