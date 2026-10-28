import { useMemo, useState } from 'react';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import Lightbox from '../components/primitives/Lightbox';
import ProjectCard from '../components/primitives/ProjectCard';
import SectionLabel from '../components/primitives/SectionLabel';
import { projects, projectTypes } from '../lib/projects';
import { waLink } from '../lib/site';

export default function Realisations() {
  const [filter, setFilter] = useState('Tout');
  const [activeProject, setActiveProject] = useState(null);

  const visible = useMemo(() => {
    if (filter === 'Tout') return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <>
      <Navbar />
      <main className="bg-white pb-16 lg:pb-0 w-full overflow-hidden">
        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-14 lg:pt-28 lg:pb-20">
          <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionLabel index="04">Nos réalisations</SectionLabel>
              <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-navy-900">
                Chantiers réalisés,<br />
                <span className="italic text-water-600">à Kinshasa.</span>
              </h1>
            </div>
            <div className="flex items-end lg:col-span-5">
              <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
                Plomberie, forage et installations sanitaires. Les chantiers présentés ci-dessous ont été réalisés par DL Plomberie &amp; Forage — toutes les photos proviennent de l'entreprise.
              </p>
            </div>
          </header>

          <div className="border-y border-mist-200 py-4 mt-14">
            <div className="flex flex-wrap items-center gap-2">
              {projectTypes.map((t) => {
                const active = t === filter;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilter(t)}
                    className={`font-mono text-[11px] uppercase tracking-label px-3 py-2 transition-colors ${
                      active ? 'bg-navy-900 text-white' : 'text-navy-700 hover:text-water-600'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
              <span className="ml-auto font-mono text-[11px] uppercase tracking-label text-navy-700/70">
                {visible.length} projet{visible.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} onMediaClick={setActiveProject} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="py-24 text-center text-sm text-navy-700">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          )}

          <div className="mt-20 border-t border-mist-200 pt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-prose text-sm text-navy-700">
              Un projet similaire en tête ? Décrivez-le nous — nous étudions chaque demande avant intervention.
            </p>
            {/* IDEA 2: Archive CTA opens WhatsApp */}
            <a
              href={waLink('Bonjour, j\'ai vu vos réalisations sur le site. Je souhaite un devis pour un projet similaire.')}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
            >
              Demander un devis →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <MobileActionBar />
      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}