"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Clock } from "lucide-react";
import type { GithubRepo } from "@/lib/github";

interface ProjectCardProps {
  repo: GithubRepo;
  index: number;
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  R: "#198CE7",
  Java: "#B07219",
  HTML: "#E44B23",
  CSS: "#563D7C",
  Shell: "#89E051",
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months === 1) return "1 month ago";
  if (months < 12) return `${months} months ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const langColor = repo.language ? LANG_COLORS[repo.language] ?? "#64748B" : "#64748B";

  return (
    <motion.a
      href={`/projects/${repo.name}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
      className="block bg-white border border-border rounded-card p-5 shadow-card group"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-textPrimary text-sm group-hover:text-accent transition-colors font-mono truncate">
          {repo.name}
        </h3>
        <ExternalLink size={14} className="text-textMuted shrink-0 mt-0.5" />
      </div>

      <p className="text-textMuted text-small leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
        {repo.description ?? "No description provided."}
      </p>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-accent text-small font-mono bg-accentLight px-2 py-0.5 rounded-badge"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 text-textMuted text-small">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={12} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={12} />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Clock size={12} />
          {timeAgo(repo.updated_at)}
        </span>
      </div>
    </motion.a>
  );
}
