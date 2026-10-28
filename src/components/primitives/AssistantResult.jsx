import { waLink } from '../../lib/site';
import Button from './Button';
import WhatsAppIcon from './WhatsAppIcon';

export default function AssistantResult({ recommendation, onRestart }) {
  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-300">
      <p className="font-mono text-[10px] uppercase tracking-label text-water-600 mb-2">
        Recommandation
      </p>
      <h3 className="font-display text-2xl text-navy-900">
        {recommendation.title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-navy-700">
        {recommendation.text}
      </p>

      <div className="mt-8 border-t border-mist-200 pt-6">
        <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-3">
          Ce que nous aurons besoin de savoir :
        </p>
        <ul className="space-y-2">
          {recommendation.needs.map((n, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-navy-700">
              <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-water-500" />
              {n}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-mist-200">
        <button
          onClick={onRestart}
          className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 order-2 sm:order-1"
        >
          ↺ Refaire l'assistant
        </button>
        <Button
          as="a"
          href={waLink(recommendation.waMessage)}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          size="lg"
          className="order-1 sm:order-2 w-full sm:w-auto justify-center"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Discuter sur WhatsApp
        </Button>
      </div>
    </div>
  );
}