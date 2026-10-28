export default function SectionLabel({ index, children, tone = 'light' }) {
  const color = tone === 'dark' ? 'text-cyan-400' : 'text-water-600';
  const rule  = tone === 'dark' ? 'bg-cyan-400/60' : 'bg-water-500/60';
  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono text-[11px] uppercase tracking-label ${color}`}>{index}</span>
      <div className={`h-px w-8 ${rule}`} />
      <span className={`font-mono text-[11px] uppercase tracking-label ${color}`}>{children}</span>
    </div>
  );
}