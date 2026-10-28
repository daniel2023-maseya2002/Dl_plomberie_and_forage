export default function QuoteStep({ title, subtitle, children }) {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="mb-8">
        <h3 className="font-display text-2xl text-navy-900">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-navy-700">{subtitle}</p>}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}