import SectionLabel from '../primitives/SectionLabel';

const values = [
  {
    index: '01',
    title: 'Diagnostic avant intervention',
    body: "Nous évaluons le besoin et le site avant de proposer une solution — pas l'inverse.",
  },
  {
    index: '02',
    title: 'Travail propre et durable',
    body: 'Matériel adapté, pose soignée, vérification en fin de chantier.',
  },
  {
    index: '03',
    title: 'Devis clair',
    body: 'Périmètre, matériel et délais indiqués avant tout démarrage de travaux.',
  },
  {
    index: '04',
    title: 'Interlocuteur unique',
    body: 'Un seul contact pour le suivi, du premier appel à la mise en service.',
  },
  {
    index: '05',
    title: 'Disponibilité après livraison',
    body: 'Nous restons joignables pour toute question ou ajustement après la fin des travaux.',
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className="bg-mist-50 scroll-mt-20 w-full overflow-hidden">
      {/* Full-width wrapper with manual padding */}
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left — statement */}
          <div className="lg:col-span-5">
            <SectionLabel index="07">Pourquoi nous choisir</SectionLabel>

            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              La méthode avant l'intervention.
            </h2>

            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-navy-700">
              À Kinshasa, la qualité d'un travail lié à l'eau dépend moins
              du matériel que de la préparation. Nous avons construit notre
              approche autour de cinq principes simples — chacun appliqué
              sur chaque chantier, sans exception.
            </p>

            <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-navy-700">
              Ce que nous demandons à nos clients : un échange direct sur le
              besoin. Ce que nous garantissons en retour : un devis
              compréhensible et un travail vérifiable.
            </p>
          </div>

          {/* Right — value list */}
          <div className="lg:col-span-7">
            <ol>
              {values.map((v, i) => (
                <li
                  key={v.index}
                  className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-6 ${
                    i === 0 ? 'border-t border-mist-200' : ''
                  } border-b border-mist-200`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-label text-water-600 pt-1">
                    {v.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight text-navy-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-[14px] leading-relaxed text-navy-700">
                      {v.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}