interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-block px-2.5 py-1 border border-border text-textBody text-small font-mono rounded-badge hover:border-accent hover:text-accent transition-colors">
      {label}
    </span>
  );
}
