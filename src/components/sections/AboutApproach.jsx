import SectionLabel from '../primitives/SectionLabel';

const steps = [
  {
    index: '01',
    title: 'Prise de contact',
    body: "Un appel ou un message WhatsApp. Nous écoutons le besoin et posons les premières questions.",
  },
  {
    index: '02',
    title: 'Évaluation',
    body: "Selon le cas : visite sur site, photos transmises, ou échange approfondi par téléphone.",
  },
  {
    index: '03',
    title: 'Devis',
    body: "Périmètre des travaux, matériel, délais, et conditions. Écrit, lisible, sans surprises.",
  },
  {
    index: '04',
    title: 'Intervention et suivi',
    body: "Réalisation, essais, mise en service. Nous restons joignables après la fin des travaux.",
  },
];

export default function AboutApproach() {
  return (
    <section className="bg-mist-50 w-full overflow-hidden">
      {/* Full-width wrapper */}
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel index="03">Notre méthode</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] text-navy-900">
              Quatre étapes,<br />
              <span className="italic text-water-600">sans raccourci.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-6 lg:col-start-7">
            <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
              Sur chaque chantier, le même déroulé. Il ne s'agit pas d'une
              procédure administrative — chaque étape nous évite une erreur
              qui coûterait plus cher au client qu'à nous.
            </p>
          </div>
        </div>

        {/* Step sequence */}
        <ol className="mt-14 grid grid-cols-1 gap-10 border-t border-mist-200 pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li key={s.index}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-label text-water-600">
                  {s.index}
                </span>
                <span className="h-px flex-1 bg-mist-200" />
              </div>
              <h3 className="mt-4 font-display text-xl leading-tight text-navy-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-navy-700">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}