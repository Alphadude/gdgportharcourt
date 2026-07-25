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
};

export default function SchedulePage() {
  // Pre-group sessions by day
  const sessionsByDay = Object.fromEntries(
    Object.keys(DAY_LABELS).map((day) => {
      const dayNum = Number(day);
      const daySessions = sessions
        .filter((s) => s.day === dayNum)
        .sort((a, b) => a.startTime.localeCompare(b.startTime));
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
