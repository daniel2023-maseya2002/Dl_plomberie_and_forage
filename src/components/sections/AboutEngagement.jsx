import { Link } from 'react-router-dom';
import ArrowIcon from '../primitives/ArrowIcon';
import SectionLabel from '../primitives/SectionLabel';

const weOwe = [
  'Un diagnostic avant toute proposition',
  'Un devis écrit et lisible',
  'Du matériel adapté au besoin réel',
  'Une explication de ce qui a été fait',
  'Une disponibilité après livraison',
];

const weAsk = [
  'Une description honnête du problème',
  'Un accès au site au moment convenu',
  'Une confirmation avant intervention',
  'Un retour après la fin des travaux',
];

export default function AboutEngagement() {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Full-width wrapper */}
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">

        <div className="max-w-prose">
          <SectionLabel index="04">Engagement</SectionLabel>
          <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] text-navy-900">
            Ce que nous vous devons,<br />
            <span className="italic text-water-600">ce que nous vous demandons.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* We owe */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
              Notre engagement
            </p>
            <ul className="mt-6 divide-y divide-mist-200 border-y border-mist-200">
              {weOwe.map((item) => (
                <li key={item} className="flex items-baseline gap-4 py-4">
                  <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-water-500" />
                  <span className="text-[15px] leading-relaxed text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* We ask */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
              Ce que nous vous demandons
            </p>
            <ul className="mt-6 divide-y divide-mist-200 border-y border-mist-200">
              {weAsk.map((item) => (
                <li key={item} className="flex items-baseline gap-4 py-4">
                  <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-navy-900" />
                  <span className="text-[15px] leading-relaxed text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-mist-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-sm text-navy-700">
            Un projet en tête ? Nous étudions chaque demande avant
            intervention.
          </p>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
          >
            Demander un devis
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}