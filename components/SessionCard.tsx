// ─────────────────────────────────────────────────────────────────────────────
// components/SessionCard.tsx
// Schedule session card matching official DevFest Lagos/Port Harcourt design
// ─────────────────────────────────────────────────────────────────────────────

import { Session, Speaker } from "@/lib/types";

interface SessionCardProps {
  session: Session;
  speakers: Speaker[];
}

export default function SessionCard({ session, speakers }: SessionCardProps) {
  // Extract rooms or track for display
  const locationText = session.room || session.track;
  const locationItems = locationText.split(",").map((loc) => loc.trim());

  // Bullet color helpers
  const BULLET_COLORS = [
    { dot: "bg-emerald-500", text: "text-emerald-700" },
    { dot: "bg-rose-500", text: "text-rose-700" },
    { dot: "bg-sky-500", text: "text-sky-700" },
    { dot: "bg-amber-500", text: "text-amber-700" },
    { dot: "bg-purple-500", text: "text-purple-700" },
  ];

  return (
    <article className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-black/5 hover:shadow-md transition-all duration-200">
      {/* ── Top Row: Title & Time ────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-black font-sans leading-snug">
          {session.title}
        </h3>
        <span className="text-sm font-bold text-gray-500 font-sans tabular-nums shrink-0 whitespace-nowrap">
          {session.startTime} - {session.endTime}
        </span>
      </div>

      {/* ── Description (if provided) ───────────────────────────────────── */}
      {session.description && (
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {session.description}
        </p>
      )}

      {/* ── Room / Location Bullets ─────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 mt-3">
        {locationItems.map((item, idx) => {
          const color = BULLET_COLORS[idx % BULLET_COLORS.length];
          return (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700"
            >
              <span className={`w-2 h-2 rounded-full ${color.dot}`} />
              <span className={color.text}>{item}</span>
            </span>
          );
        })}
      </div>

      {/* ── Speakers Row (if present) ──────────────────────────────────── */}
      {speakers.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-gray-100">
          {speakers.map((sp) => (
            <div key={sp.id} className="flex items-center gap-2">
              <img
                src={sp.imageUrl}
                alt={sp.name}
                className="w-7 h-7 rounded-full object-cover border border-gray-200 shrink-0"
              />
              <span className="text-sm font-bold text-gray-900">{sp.name}</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-600">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                {session.room || session.track}
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
