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
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline connector */}
      <span className="absolute left-0 top-1.5 flex flex-col items-center">
        <span className="w-3 h-3 rounded-full bg-accent border-2 border-white ring-2 ring-accent/30" />
        <span className="w-px flex-1 bg-border mt-1" />
      </span>

      {/* Card */}
      <div className="bg-white border border-border rounded-card shadow-card hover:shadow-cardHover transition-shadow">
        <button
          className="w-full text-left px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <div>
            <h3 className="text-h4 font-semibold text-textPrimary">{role.title}</h3>
            <p className="text-accent font-medium text-sm mt-0.5">{role.company}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-textMuted text-small font-mono">{role.period}</span>
            {expanded ? (
              <ChevronUp size={16} className="text-textMuted" />
            ) : (
              <ChevronDown size={16} className="text-textMuted" />
            )}
          </div>
        </button>

        {expanded && (
          <div className="px-6 pb-5 border-t border-border">
            <ul className="mt-4 space-y-2">
              {role.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-textBody text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
