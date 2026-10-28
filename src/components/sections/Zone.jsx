import { SITE, telLink, waLink } from '../../lib/site';
import PhoneIcon from '../primitives/PhoneIcon';
import SectionLabel from '../primitives/SectionLabel';
import WhatsAppIcon from '../primitives/WhatsAppIcon';

const zones = [
  { name: "N'Sele", primary: true },
  { name: 'Mikonga 2', primary: true },
  { name: 'Kinshasa', primary: false },
  { name: 'Périphérie sur demande', primary: false },
];

export default function Zone() {
  return (
    <section id="zone" className="bg-white scroll-mt-20 w-full overflow-hidden">
      {/* Full-width wrapper */}
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left — narrative */}
          <div className="lg:col-span-6">
            <SectionLabel index="09">Zone d'intervention</SectionLabel>

            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Basés à {SITE.zone},<br />
              <span className="italic text-water-600">nous intervenons à {SITE.city}.</span>
            </h2>

            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-navy-700">
              Nos interventions couvrent principalement {SITE.zone} et les
              zones voisines de {SITE.city}. Pour les projets situés en
              dehors de ces zones, contactez-nous : nous étudions chaque
              demande au cas par cas.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={telLink}
                className="inline-flex items-center gap-2 border border-navy-900 px-4 py-2.5 text-sm text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
              >
                <PhoneIcon className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={waLink('Bonjour, je souhaite savoir si vous intervenez dans ma zone.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-navy-900 underline decoration-mist-200 underline-offset-4 hover:text-water-600"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Vérifier ma zone sur WhatsApp
              </a>
            </div>
          </div>

          {/* Right — static zone diagram */}
          <div className="lg:col-span-6">
            <div className="relative border border-mist-200 bg-mist-50 p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-water-500" />
                <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-water-500" />
                <span className="absolute left-0 bottom-0 h-3 w-3 border-l border-b border-water-500" />
                <span className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-water-500" />
              </div>

              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
                  Zones couvertes
                </p>

                <ul className="mt-6 divide-y divide-mist-200">
                  {zones.map((z) => (
                    <li
                      key={z.name}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span
                        className={
                          z.primary
                            ? 'font-display text-2xl text-navy-900'
                            : 'text-[15px] text-navy-700'
                        }
                      >
                        {z.name}
                      </span>
                      {z.primary && (
                        <span className="font-mono text-[10px] uppercase tracking-label text-water-600">
                          Principale
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-mist-200 pt-4">
                  <p className="font-mono text-[10px] leading-relaxed tracking-label uppercase text-navy-700/70">
                    {SITE.city} · {SITE.country}
                  </p>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed tracking-label uppercase text-navy-700/70">
                    Hors zone : étude sur demande
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}