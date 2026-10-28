import ArrowIcon from './ArrowIcon';
import Button from './Button';

export default function AssistantStep({
  stepData,
  currentAnswers,
  freeText,
  onFreeTextChange,
  onSelect,
  onFreeTextSubmit,
  onBack,
  error,
  isFirstStep,
}) {
  const isFreeText = stepData.isFreeText;

  if (isFreeText) {
    return (
      <form onSubmit={onFreeTextSubmit} className="flex flex-col flex-1">
        <h3 className="font-display text-2xl text-navy-900 mb-6">
          {stepData.question}
        </h3>

        <textarea
          className="w-full border border-mist-200 bg-white p-4 text-[15px] focus:outline-none focus:border-water-500 min-h-[120px] resize-y"
          placeholder="Ex : Je veux installer l'eau courante dans une nouvelle maison..."
          value={freeText}
          onChange={(e) => onFreeTextChange(e.target.value)}
        />

        {error && <p className="text-red-700 text-sm mt-2">{error}</p>}

        <div className="mt-auto pt-6 flex justify-between items-center">
          {!isFirstStep && (
            <button
              type="button"
              onClick={onBack}
              className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600"
            >
              ← Retour
            </button>
          )}
          <Button type="submit" variant="primary" size="md" className="ml-auto">
            Valider <ArrowIcon className="h-4 w-4" />
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <h3 className="font-display text-2xl text-navy-900 mb-6">
        {stepData.question}
      </h3>

      <div className="flex flex-col gap-3">
        {stepData.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="group flex items-center justify-between w-full text-left p-4 bg-white border border-mist-200 hover:border-water-500 hover:bg-water-600 hover:text-white transition-all duration-200"
          >
            <span className="font-medium text-[15px]">{opt.label}</span>
            <ArrowIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {!isFirstStep && (
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={onBack}
            className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600"
          >
            ← Retour
          </button>
        </div>
      )}
    </div>
  );
}