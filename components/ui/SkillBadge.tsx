interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 bg-accentLight text-accent text-small font-mono font-medium rounded-badge border border-accent/10">
      {label}
    </span>
  );
}
