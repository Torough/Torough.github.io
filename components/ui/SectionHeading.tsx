interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-h2 font-bold text-textPrimary mb-3">{title}</h2>
      <div className="w-12 h-1 bg-accent rounded-full" />
      {subtitle && (
        <p className="mt-4 text-textMuted text-body max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
