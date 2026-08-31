"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Role } from "@/lib/data/experience";

interface ExperienceCardProps {
  role: Role;
  index: number;
}

export default function ExperienceCard({ role, index }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="relative pl-14 pb-8 last:pb-0">
      <span className="absolute left-0 top-4 font-mono text-micro text-textMuted tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute left-6 top-4 bottom-0 w-px bg-border last:hidden" />

      <div className="border border-border bg-surface hover:border-accentDim transition-colors">
        <button
          className="w-full text-left px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <div>
            <h3 className="text-h4 font-sans font-semibold text-textPrimary">{role.title}</h3>
            <p className="text-accent font-mono text-small mt-1">{role.company}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-textMuted font-mono text-micro tracking-wide">{role.period}</span>
            {expanded ? (
              <ChevronUp size={16} className="text-textMuted" />
            ) : (
              <ChevronDown size={16} className="text-textMuted" />
            )}
          </div>
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-[250ms] ease-out"
          style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div
              className={`px-6 pb-5 border-t border-border transition-opacity duration-200 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2.5 text-textBody text-sm leading-relaxed">
                    <span className="mt-1 text-accent font-mono text-small shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
