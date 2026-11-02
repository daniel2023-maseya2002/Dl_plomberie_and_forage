import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import ProjectCard from '../components/primitives/ProjectCard';
import SectionLabel from '../components/primitives/SectionLabel';
import { mapForLegacyCard, projectCategories, projects } from '../lib/projects';

export default function Realisations() {
  const [filter, setFilter] = useState('Tout');
  const [search, setSearch] = useState('');

  const visible = useMemo(() => {
    let result = projects;
    
    if (filter !== 'Tout') {
      result = result.filter((p) => p.category === filter);
    }
    
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.commune.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }
    
    return result.map(mapForLegacyCard);
  }, [filter, search]);

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
                Plomberie, forage et installations sanitaires. Les chantiers
                présentés ci-dessous ont été réalisés par DL Plomberie &amp;
                Forage — toutes les photos proviennent de l'entreprise.
              </p>
            </div>
          </header>

          {/* Search and Filters */}
          <div className="border-y border-mist-200 py-4 mt-14 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-2 flex-1">
              {projectCategories.map((t) => {
                const active = t === filter;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilter(t)}
                    className={`font-mono text-[11px] uppercase tracking-label px-3 py-2 transition-colors ${
                      active
                        ? 'bg-navy-900 text-white'
                        : 'text-navy-700 hover:text-water-600'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            
            <div className="w-full sm:w-64">
               <input 
                 type="text" 
                 placeholder="Rechercher un projet, une zone..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full border border-mist-200 px-3 py-2 text-sm text-navy-900 focus:outline-none focus:border-water-500"
               />
            </div>
          </div>

          {/* Archive Grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {visible.map((p) => (
              <Link key={p.id} to={`/realisations/${p.slug}`} className="block">
                <ProjectCard project={p} onMediaClick={null} />
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="py-24 text-center text-sm text-navy-700">
              Aucun projet trouvé pour ces critères.
            </p>
          )}

        </div>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}