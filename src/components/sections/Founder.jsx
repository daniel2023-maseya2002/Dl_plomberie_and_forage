import founderImg from '../../assets/founder.jpeg';
import { SITE } from '../../lib/site';
import SectionLabel from '../primitives/SectionLabel';

export default function Founder() {
  return (
    <section id="a-propos" className="bg-navy-900 text-white scroll-mt-20 w-full overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* Portrait column */}
        <div className="relative lg:col-span-4 flex justify-center lg:justify-start px-5 sm:px-8 lg:pl-12 lg:pr-0 py-12 lg:py-24">
          <div className="relative w-full max-w-[320px] lg:max-w-[400px] aspect-[4/5] overflow-hidden bg-navy-700">
            <img
              src={founderImg}
              alt={`Portrait de ${SITE.founder.fullName}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="lg:col-span-8 flex flex-col justify-center px-5 pb-16 sm:px-8 lg:pl-12 lg:pr-16 lg:py-24">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-navy-700 pb-4 mb-8 gap-4">
            <SectionLabel index="04" tone="dark">
              Le mot du responsable
            </SectionLabel>
            <div className="text-left sm:text-right">
              <p className="font-mono text-[10px] uppercase tracking-label text-cyan-400">
                {SITE.founder.fullName}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-label text-white/50">
                {SITE.founder.title}
              </p>
            </div>
          </div>

          <blockquote>
            <p className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.2] text-white">
              «&nbsp;Un forage réussi commence par une étude honnête.
              Un dépannage réussi commence par un diagnostic clair.&nbsp;»
            </p>
          </blockquote>

          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/75 max-w-prose">
            <p>
              DL Plomberie &amp; Forage est né d'une conviction simple : à
              Kinshasa, les travaux liés à l'eau demandent d'abord de la
              méthode. Comprendre le besoin, vérifier le site, dimensionner
              correctement — avant d'intervenir.
            </p>
            <p>
              Nous travaillons avec des particuliers, des entreprises, des
              écoles et des institutions, sur des interventions ponctuelles
              comme sur des projets d'approvisionnement en eau. Notre
              engagement : livrer un travail propre, expliquer ce qui est
              fait, et rester joignables après la mise en service.
            </p>
            <p>
              Je dirige cette entreprise avec la même exigence que celle que
              j'attends d'un technicien qui viendrait chez moi.
            </p>
          </div>

          <div className="mt-10 border-t border-navy-700 pt-6">
            <p className="font-display text-lg italic text-white">
              — {SITE.founder.fullName}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-cyan-400">
              {SITE.founder.title} · {SITE.name}
            </p>
          </div>

          {/* INPP Certification block */}
          <div className="mt-6 border-t border-navy-700 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-label text-cyan-400">
              Formation
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-white/75">
              {SITE.founder.training}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}