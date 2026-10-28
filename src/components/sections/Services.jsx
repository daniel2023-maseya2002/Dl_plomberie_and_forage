import { services } from '../../lib/services';
import SectionLabel from '../primitives/SectionLabel';
import ServiceRow from '../primitives/ServiceRow';

export default function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-20 w-full overflow-hidden">
      {/* Replaced <Container> with a full-width wrapper and manual padding */}
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <header className="grid grid-cols-1 gap-8 pt-20 pb-6 lg:grid-cols-12 lg:gap-12 lg:pt-28">
          <div className="lg:col-span-5">
            <SectionLabel index="03">Nos services</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Une intervention adaptée à chaque situation.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
              Plomberie, forage et approvisionnement en eau — nous intervenons à
              Kinshasa pour les particuliers, commerces, institutions et
              exploitations. Chaque demande fait l'objet d'une évaluation avant
              intervention.
            </p>
          </div>
        </header>

        <div className="w-full">
          {services.map((s, i) => (
            <ServiceRow key={s.id} service={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}