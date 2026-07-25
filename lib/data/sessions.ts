// ─────────────────────────────────────────────────────────────────────────────
// lib/data/sessions.ts
// Schedule sessions for DevFest Port Harcourt 2026 (5-Day Festival)
// ─────────────────────────────────────────────────────────────────────────────

import { Session } from "@/lib/types";

export const DAY_LABELS: Record<number, string> = {
  1: "TUE 24",
  2: "WED 25",
  3: "THU 26",
  4: "FRI 27",
  5: "SAT 28",
};

export const DAY_TITLES: Record<number, string> = {
  1: "STUDENT DAY",
  2: "COMMUNITY DAY",
  3: "WORKSHOP DAY",
  4: "HACKATHON DAY",
  5: "MAIN EVENT",
};

export const DAY_DESCRIPTIONS: Record<number, string> = {
  1: "Kick off DevFest Port Harcourt 2026 with inspiring keynotes, networking, and community building.",
  2: "Deep dive into open source, community initiatives, and collaborative software engineering.",
  3: "Hands-on workshops, live coding, and interactive masterclasses across AI, Web, Mobile & Cloud.",
  4: "Build innovative solutions for Africa in our 24-hour hackathon with expert mentorship.",
  5: "Grand keynotes, tech ecosystem announcements, panel discussions, and closing celebration.",
};

export const DAY_BG_COLORS: Record<number, { tabBg: string; contentBg: string; titleColor: string }> = {
  1: { tabBg: "bg-[#FDF4CE]", contentBg: "bg-[#FDF4CE]", titleColor: "text-[#D97706]" },
  2: { tabBg: "bg-[#D0F2FE]", contentBg: "bg-[#D0F2FE]", titleColor: "text-[#0284C7]" },
  3: { tabBg: "bg-[#FCE7F3]", contentBg: "bg-[#FCE7F3]", titleColor: "text-[#DB2777]" },
  4: { tabBg: "bg-[#FEF9C3]", contentBg: "bg-[#FEF9C3]", titleColor: "text-[#CA8A04]" },
  5: { tabBg: "bg-[#DCFCE7]", contentBg: "bg-[#DCFCE7]", titleColor: "text-[#16A34A]" },
};

export const sessions: Session[] = [
  // ── Day 1 (TUE 24) — Student Day ───────────────────────────────────────────
  {
    id: "d1-registration",
    title: "Registration & Badge Collection",
    startTime: "8:00 AM",
    endTime: "9:30 AM",
    day: 1,
    track: "General",
    room: "Outside",
    speakerIds: [],
    type: "break",
  },
  {
    id: "d1-welcome",
    title: "Welcome to DevFest Port Harcourt, Ground Rules, and Safety.",
    startTime: "9:30 AM",
    endTime: "9:40 AM",
    day: 1,
    track: "General",
    room: "Main Hall, Exhibition Hall",
    speakerIds: [],
    type: "keynote",
  },
  {
    id: "d1-firebase",
    title: "Rapid MVP Prototyping with Firebase Studio: From Idea to Product in Minutes",
    description: "Learn how to build production-grade web applications using Firebase Data Connect and AI Studio.",
    startTime: "9:40 AM",
    endTime: "10:40 AM",
    day: 1,
    track: "Cloud",
    room: "Cinema Hall 1",
    speakerIds: ["olumide-balogun"],
    type: "workshop",
  },
  {
    id: "d1-ai-design",
    title: "How Designers Can Develop Good Taste Using Artificial Intelligence",
    description: "Exploring modern generative AI design workflows and aesthetic evaluation systems.",
    startTime: "9:40 AM",
    endTime: "10:10 AM",
    day: 1,
    track: "AI / ML",
    room: "Cinema Hall 2",
    speakerIds: ["thomas-steiner"],
    type: "talk",
  },
  {
    id: "d1-gemini",
    title: "Building Next-Gen Multimodal AI Agents with Gemini 1.5 Pro",
    startTime: "10:45 AM",
    endTime: "11:45 AM",
    day: 1,
    track: "AI / ML",
    room: "Main Stage",
    speakerIds: ["oleg-aravin"],
    type: "talk",
  },
  {
    id: "d1-lunch",
    title: "Networking Lunch & Exhibition Hour",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    day: 1,
    track: "General",
    speakerIds: [],
    type: "break",
  },

  // ── Day 2 (WED 25) — Community Day ─────────────────────────────────────────
  {
    id: "d2-keynote",
    title: "The Future of Open Source in Africa",
    startTime: "9:00 AM",
    endTime: "9:45 AM",
    day: 2,
    track: "Open Source",
    room: "Main Stage",
    speakerIds: ["samson-goddy"],
    type: "keynote",
  },
  {
    id: "d2-llm-prod",
    title: "LLMs in Production: Pitfalls & Enterprise Design Patterns",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: 2,
    track: "AI / ML",
    room: "AI Track Room",
    speakerIds: ["amarachi-iheanacho"],
    type: "talk",
  },
  {
    id: "d2-panel",
    title: "Panel: Building Tech Startups That Scale from Niger Delta",
    startTime: "11:15 AM",
    endTime: "12:15 PM",
    day: 2,
    track: "Startup",
    room: "Main Stage",
    speakerIds: ["odun-eweniyi", "bernard-parah", "femi-taiwo"],
    type: "panel",
  },

  // ── Day 3 (THU 26) — Workshop Day ──────────────────────────────────────────
  {
    id: "d3-flutter",
    title: "Flutter & Dart Masterclass: From Zero to Production App",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    day: 3,
    track: "Mobile",
    room: "Workshop Room A",
    speakerIds: ["john-kimani"],
    type: "workshop",
  },
  {
    id: "d3-webperf",
    title: "High Performance Web Apps: Next.js 14 & Server Components",
    startTime: "1:30 PM",
    endTime: "2:30 PM",
    day: 3,
    track: "Web",
    room: "Web Track Room",
    speakerIds: ["sodiq-akinjobi"],
    type: "talk",
  },

  // ── Day 4 (FRI 27) — Hackathon Day ─────────────────────────────────────────
  {
    id: "d4-hackathon",
    title: "Build for Africa Hackathon — Kickoff & 24-Hour Sprint",
    startTime: "9:00 AM",
    endTime: "6:00 PM",
    day: 4,
    track: "General",
    room: "Hackathon Arena",
    speakerIds: ["olumide-balogun", "shodipo-ayomide"],
    type: "workshop",
  },

  // ── Day 5 (SAT 28) — Main Event ────────────────────────────────────────────
  {
    id: "d5-keynote",
    title: "DevFest Port Harcourt 2026 Keynote Address",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    day: 5,
    track: "General",
    room: "Grand Auditorium",
    speakerIds: ["olumide-balogun"],
    type: "keynote",
  },
  {
    id: "d5-closing",
    title: "Hackathon Demos, Awards & Festival Closing Ceremony",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    day: 5,
    track: "General",
    room: "Grand Auditorium",
    speakerIds: ["odun-eweniyi", "samson-goddy"],
    type: "keynote",
  },
];
