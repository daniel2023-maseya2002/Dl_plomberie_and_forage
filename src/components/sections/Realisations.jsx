import { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../../lib/projects';
import ArrowIcon from '../primitives/ArrowIcon';
import Lightbox from '../primitives/Lightbox';
import { FeatureProject, ProjectTile } from '../primitives/ProjectTile';
import SectionLabel from '../primitives/SectionLabel';

export default function Realisations() {
  const [feature, ...rest] = featuredProjects;
  const [activeProject, setActiveProject] = useState(null);

  if (!feature) return null;

  return (
    <section id="realisations" className="bg-white scroll-mt-20 w-full overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <header className="grid grid-cols-1 gap-6 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <div className="lg:col-span-7">
            <SectionLabel index="05">Réalisations</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Des chantiers réels, à Kinshasa.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
              Sélection de travaux réalisés — plomberie, forage et installations sanitaires. Toutes les photos proviennent de chantiers de l'entreprise.
            </p>
          </div>
        </header>

        <FeatureProject project={feature} onMediaClick={setActiveProject} />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
          {rest.map((p, i) => (
            <div key={p.id} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <ProjectTile project={p} onMediaClick={setActiveProject} />
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-mist-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-sm text-navy-700">
            Le reste des chantiers est disponible dans l'archive complète.
          </p>
          <Link
            to="/realisations"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
          >
            Voir toutes les réalisations
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}