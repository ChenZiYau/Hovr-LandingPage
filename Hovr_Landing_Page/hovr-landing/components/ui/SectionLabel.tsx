export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-hovr-accent/50" />
      <span className="text-xs font-mono font-semibold text-hovr-accent uppercase tracking-[0.2em]">
        {label}
      </span>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-hovr-accent/50" />
    </div>
  );
}
