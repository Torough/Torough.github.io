interface SectionHeadingProps {
  index: number;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="sheet-index shrink-0">{String(index).padStart(2, "0")}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="text-h2 font-sans text-textPrimary">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-textMuted text-body max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
