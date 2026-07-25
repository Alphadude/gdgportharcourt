// ─────────────────────────────────────────────────────────────────────────────
// components/TeamSection.tsx
// Lower team list section matching 2025.devfestlagos.com/team pattern
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState } from "react";
import { TeamMember, TeamDepartment } from "@/lib/types";

interface TeamSectionProps {
  members: TeamMember[];
}

const DEPARTMENTS: { label: string; value: TeamDepartment }[] = [
  { label: "ALL", value: "all" },
  { label: "ORGANIZING", value: "organizing" },
  { label: "DESIGN", value: "design" },
  { label: "ENGINEERING", value: "engineering" },
  { label: "PRODUCT", value: "product" },
  { label: "MARKETING", value: "marketing" },
  { label: "QA", value: "qa" },
  { label: "CONTENT", value: "content" },
];

export default function TeamSection({ members }: TeamSectionProps) {
  const [activeDept, setActiveDept] = useState<TeamDepartment>("content");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filteredMembers = members.filter((m) =>
    activeDept === "all" ? true : m.department === activeDept
  );

  return (
    <section className="bg-[#18181B] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* ── Top Header Row: Title & Layout Switcher ─────────────────────── */}
        <div className="flex items-start justify-between gap-6 mb-8 sm:mb-12">
          {/* THE TEAM Heading */}
          <div>
            <h2 className="font-akira font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              THE
              <br />
              TEAM
            </h2>
          </div>

          {/* Top Right Layout Switcher Pill */}
          <div className="flex flex-col items-center shrink-0">
            <button
              onClick={() => setViewMode((prev) => (prev === "list" ? "grid" : "list"))}
              aria-label="Toggle Layout"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F5B82A] text-black hover:bg-yellow-400 transition-colors shadow-md border border-black cursor-pointer"
            >
              {viewMode === "list" ? (
                <>
                  <span className="font-bold text-sm font-mono flex gap-1">
                    <span>=</span>
                    <span>☰</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="font-bold text-sm">⊞</span>
                </>
              )}
            </button>
            <span className="text-gray-400 text-xs font-sans mt-1.5 font-medium">
              Layout
            </span>
          </div>
        </div>

        {/* ── Department Filter Pills ────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {DEPARTMENTS.map((dept) => {
            const isActive = activeDept === dept.value;
            return (
              <button
                key={dept.value}
                onClick={() => setActiveDept(dept.value)}
                className={`font-akira font-black text-xs sm:text-sm px-5 sm:px-7 py-2.5 rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#F5B82A] text-black shadow-md scale-105"
                    : "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5"
                }`}
              >
                {dept.label}
              </button>
            );
          })}
        </div>

        {/* ── Team Member Rows / Grid ────────────────────────────────────── */}
        {filteredMembers.length === 0 ? (
          <div className="py-16 text-center text-gray-400 text-base font-medium">
            No team members listed in this department yet.
          </div>
        ) : viewMode === "list" ? (
          /* List View (Exact replica of screenshot) */
          <div className="divide-y divide-white/10">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 group"
              >
                {/* Left: Avatar & Name */}
                <div className="flex items-center gap-5 shrink-0 max-w-sm">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden bg-gray-800 border border-white/10 shrink-0">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-akira font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Center: Quote & Listening To */}
                <div className="flex-1 max-w-2xl">
                  {member.quote && (
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                        What&apos;s a quote you live by?
                      </p>
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans font-medium">
                        {member.quote}
                      </p>
                    </div>
                  )}

                  {member.listeningTo && (
                    <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-gray-400">
                      <span className="w-4 h-4 rounded-full bg-[#F5B82A] text-black flex items-center justify-center text-[10px] shrink-0">
                        ♫
                      </span>
                      <span className="uppercase font-akira text-[10px] text-gray-400 tracking-wider">
                        LISTENING TO
                      </span>
                      <span className="text-gray-300 font-sans truncate">
                        {member.listeningTo}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right: Social Links */}
                <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                      </svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} X Twitter`}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1DA1F2] text-white flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} Instagram`}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-gray-800 mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-akira font-black text-xl text-white uppercase leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{member.role}</p>
                  {member.quote && (
                    <p className="text-gray-300 text-xs mt-3 leading-relaxed">
                      &quot;{member.quote}&quot;
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
