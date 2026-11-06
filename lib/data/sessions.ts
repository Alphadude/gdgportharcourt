// ─────────────────────────────────────────────────────────────────────────────
// lib/data/sessions.ts
// Schedule sessions for DevFest Port Harcourt 2026
// ─────────────────────────────────────────────────────────────────────────────

import { Session } from "@/lib/types";

export const DAY_LABELS: Record<number, string> = {
  1: "AUG 21",
  2: "SEP 25",
  3: "OCT 23",
  4: "NOV 28",
  5: "DEC 11",
};

export const DAY_TITLES: Record<number, string> = {
  1: "GDGPHC INNOVATION DAY",
  2: "GDGPHC AI & CLOUD DAY",
  3: "GDGPHC DEVELOPER DAY",
  4: "GDGPHC DEVFEST 2026 MAIN STAGE",
  5: "GDGPHC CLOSING CEREMONY",
};

export const DAY_DESCRIPTIONS: Record<number, string> = {
  1: "Kick off DevFest Port Harcourt 2026 with inspiring product design, user experience, and community building.",
  2: "Deep dive into artificial intelligence, LLM edge deployments, distributed backend architectures, and multi-agent cloud desks.",
  3: "Hands-on developer masterclasses across technical writing, reputation building, mobile engineering, and open source.",
  4: "DevFest Port Harcourt 2026 Main Event at Platinum Hall, Lemaco Gardens with premier keynotes and expert sessions.",
  5: "Grand festival closing ceremony, awards, project demonstrations, and networking celebration.",
};

export const DAY_BG_COLORS: Record<number, { tabBg: string; contentBg: string; titleColor: string }> = {
  1: { tabBg: "bg-[#FDF4CE]", contentBg: "bg-[#FDF4CE]", titleColor: "text-google-blue" },
  2: { tabBg: "bg-[#D0F2FE]", contentBg: "bg-[#D0F2FE]", titleColor: "text-google-blue" },
  3: { tabBg: "bg-[#FCE7F3]", contentBg: "bg-[#FCE7F3]", titleColor: "text-google-blue" },
  4: { tabBg: "bg-[#FFE7A5]", contentBg: "bg-[#FFE7A5]", titleColor: "text-google-blue" },
  5: { tabBg: "bg-[#DCFCE7]", contentBg: "bg-[#DCFCE7]", titleColor: "text-google-blue" },
};

export const sessions: Session[] = [
  // ── Day 1 (AUG 21) — Innovation Day ───────────────────────────────────────
  {
    id: "d1-registration",
    title: "Attendee Check-in & Breakfast Networking",
    startTime: "8:00 AM",
    endTime: "9:00 AM",
    day: 1,
    track: "General",
    room: "Welcome Foyer",
    speakerIds: [],
    type: "break",
  },
  {
    id: "d1-welcome",
    title: "Opening Address & GDG Port Harcourt Ecosystem Vision",
    startTime: "9:00 AM",
    endTime: "9:35 AM",
    day: 1,
    track: "General",
    room: "Main Stage",
    speakerIds: [],
    type: "keynote",
  },
  {
    id: "d1-design-reality",
    title: "Designing for Reality: What Happens When Technology Meets the Real World?",
    description: "Bridging the gap between UI/UX design theories and real-world African user behaviors, addressing accessibility, low-end devices, and intuitive design systems.",
    startTime: "9:45 AM",
    endTime: "10:45 AM",
    day: 1,
    track: "Startup",
    room: "Cinema Hall 1",
    speakerIds: ["chiehiura-nze"],
    type: "talk",
  },
  {
    id: "d1-lunch",
    title: "Networking Lunch & Exhibition Hour",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    day: 1,
    track: "General",
    room: "Main Hall",
    speakerIds: [],
    type: "break",
  },

  // ── Day 2 (SEP 25) — AI & Cloud Day ───────────────────────────────────────
  {
    id: "d2-db-ai-search",
    title: "Your Database Is Smarter Than You Think: AI Search Without Retraining a Model",
    description: "Modern AI search patterns using existing PostgreSQL vector capabilities, embeddings, and intelligent database indexing without complex model retraining.",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    day: 2,
    track: "AI / ML",
    room: "Main Stage",
    speakerIds: ["cedar-daniel"],
    type: "talk",
  },
  {
    id: "d2-edge-ai",
    title: "Building AI at the Edge with Gemma & LiteRT for African Builders",
    description: "Deploying lightweight on-device AI models using Google Gemma and LiteRT for high-performance edge computing in low-bandwidth environments.",
    startTime: "10:45 AM",
    endTime: "11:45 AM",
    day: 2,
    track: "AI / ML",
    room: "AI Track Room",
    speakerIds: ["samuel-amakiri"],
    type: "talk",
  },
  {
    id: "d2-multiagent-cloud",
    title: "Build and Deploy a Multi-Agent Underwriting Desk with ADK, MCP and Cloud Run",
    description: "Hands-on architectural walkthrough constructing autonomous multi-agent systems using Google Agent Development Kit (ADK), Model Context Protocol (MCP), and Google Cloud Run.",
    startTime: "12:00 PM",
    endTime: "1:15 PM",
    day: 2,
    track: "Cloud",
    room: "Workshop Room A",
    speakerIds: ["saheed-adewumi"],
    type: "workshop",
  },

  // ── Day 3 (OCT 23) — Developer Day ────────────────────────────────────────
  {
    id: "d3-reputation",
    title: "In the AI Era, Code Is Cheap. Reputation Isn’t.",
    description: "How developers and technical writers can build durable professional reputations, write high-impact open source documentation, and stand out in an AI-saturated market.",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    day: 3,
    track: "Open Source",
    room: "Web Track Room",
    speakerIds: ["funke-olasupo"],
    type: "talk",
  },

  // ── Day 4 (NOV 28) — DevFest Main Stage (Platinum Hall, Lemaco Gardens) ────
  {
    id: "d4-opening-keynote-chinda",
    title: "Keynote Address: Accelerating South-South Nigeria's Digital Economy & Youth Tech Empowerment",
    description: "Special Keynote Address by Hon. O.K. Chinda on advancing digital infrastructure, fostering youth tech capacity, and strengthening public-private partnerships across Rivers State.",
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    day: 4,
    track: "General",
    room: "Grand Auditorium",
    speakerIds: ["ok-chinda"],
    type: "keynote",
  },
  {
    id: "d4-solo-developer-keynote",
    title: "From Idea to Income: How a Solo Developer Can Build and Monetize Mobile Apps with AI and RevenueCat",
    description: "Keynote presentation on practical workflows taking a mobile app from idea to launch as a one-person development team, validating market demand, and building sustainable subscription revenue.",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    day: 4,
    track: "Mobile",
    room: "Grand Auditorium",
    speakerIds: ["paul-jeremiah"],
    type: "keynote",
  },
  {
    id: "d4-mobile-sdlc",
    title: "Mobile App AI SDLC: From Code to Both App Stores, One Verified Gate at a Time",
    description: "A decade of production mobile engineering distilled into automated CI/CD pipelines, AI-assisted verification, and multi-platform store deployments.",
    startTime: "10:45 AM",
    endTime: "11:45 AM",
    day: 4,
    track: "Mobile",
    room: "Grand Auditorium",
    speakerIds: ["austine-amah"],
    type: "talk",
  },
  {
    id: "d4-community-product",
    title: "Community as a Product: Designing Experiences That Drive Activation, Retention and Contribution",
    description: "Explore what happens when we stop treating community as a list of members to grow and start thinking about it as an experience to design, mapping the member journey from Join → Activate → Return → Participate → Contribute → Lead.",
    startTime: "11:00 AM",
    endTime: "11:45 AM",
    day: 4,
    track: "General",
    room: "Cinema Hall 2",
    speakerIds: ["joy-akhanolu"],
    type: "talk",
  },
  {
    id: "d4-antigravity-microservices",
    title: "Deploying Microservices on Google Cloud with Antigravity",
    description: "Learn how agent-first development with Google Antigravity automates Dockerfile generation, service configuration, and deployment to Cloud Run, Artifact Registry, and Cloud Build, while applying strict IAM and security guardrails.",
    startTime: "1:30 PM",
    endTime: "2:30 PM",
    day: 4,
    track: "Cloud",
    room: "Workshop Room A",
    speakerIds: ["caleb-duff"],
    type: "workshop",
  },
  {
    id: "d4-devfest-panel",
    title: "Panel: Scaling Scalable Tech Ventures & AI Innovations from South-South Nigeria",
    description: "Conversations with founders, senior engineering leaders, and Google Developer Experts on scaling products and talent across the region.",
    startTime: "2:45 PM",
    endTime: "3:45 PM",
    day: 4,
    track: "Startup",
    room: "Grand Auditorium",
    speakerIds: ["paul-jeremiah", "cedar-daniel", "samuel-amakiri", "chiehiura-nze", "saheed-adewumi", "austine-amah", "joy-akhanolu", "caleb-duff"],
    type: "panel",
  },

  // ── Day 5 (DEC 11) — Closing Ceremony ─────────────────────────────────────
  {
    id: "d5-closing-awards",
    title: "Festival Wrap-up, Community Awards & Networking Mixer",
    description: "Celebrating our speakers, organizers, volunteers, and the broader tech community.",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    day: 5,
    track: "General",
    room: "Grand Auditorium",
    speakerIds: ["paul-jeremiah", "funke-olasupo"],
    type: "keynote",
  },
];
