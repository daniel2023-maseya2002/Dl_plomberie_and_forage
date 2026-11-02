import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import SectionLabel from '../components/primitives/SectionLabel';
import { memberById } from '../lib/members';
import { projectBySlug, projects } from '../lib/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-display text-navy-900 mb-4">Projet introuvable</h1>
        <Link to="/realisations" className="text-water-600 underline">Retour aux réalisations</Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const associatedMembers = project.members?.map(id => memberById(id)).filter(Boolean) || [];

  // Helper to check if the cover is a video file
  const isCoverVideo = project.cover?.toString().endsWith('.mp4');

  return (
    <>
      <Navbar />
      <main className="bg-white pb-16 lg:pb-0 w-full overflow-hidden">
        
        {/* Hero Section */}
        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-12 lg:pt-28 lg:pb-16 border-b border-mist-200">
          <div className="mb-6">
            <Link to="/realisations" className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 inline-flex items-center gap-2">
              ← Retour aux réalisations
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel index="04">Projet · {project.category}</SectionLabel>
              <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-navy-900 mb-6">
                {project.title}
              </h1>
              <p className="text-[15px] leading-relaxed text-navy-700 max-w-prose mb-8">
                {project.longDescription}
              </p>
              
              {/* Meta Grid */}
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-mist-200 pt-6">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-navy-700/60">Commune</dt>
                  <dd className="mt-1 text-[14px] text-navy-900">{project.commune}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-navy-700/60">Zone</dt>
                  <dd className="mt-1 text-[14px] text-navy-900">{project.area}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-navy-700/60">Année</dt>
                  <dd className="mt-1 text-[14px] text-navy-900">{project.date}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-navy-700/60">Type</dt>
                  <dd className="mt-1 text-[14px] text-navy-900">{project.category}</dd>
                </div>
              </dl>
            </div>
            
            {/* Hero Media */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-[4/5] bg-mist-100 overflow-hidden">
              {isCoverVideo ? (
                <video 
                  src={project.cover} 
                  controls 
                  muted 
                  playsInline 
                  className="absolute inset-0 h-full w-full object-cover" 
                />
              ) : project.cover ? (
                <img 
                  src={project.cover} 
                  alt={project.title} 
                  className="absolute inset-0 h-full w-full object-cover" 
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-navy-700/40">
                  Média à fournir
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Section (Photos, Videos, Audio) */}
        {(project.photos.length > 0 || project.videos.length > 0 || project.audio.length > 0) && (
          <div className="w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-24 bg-mist-50 border-b border-mist-200">
            <h2 className="font-display text-2xl text-navy-900 mb-8">Médias du projet</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photos */}
              {project.photos.map((photo, i) => (
                <div key={`photo-${i}`} className="aspect-[4/3] bg-mist-200 overflow-hidden">
                  <img src={photo.src} alt={photo.alt || 'Photo du projet'} className="h-full w-full object-cover" />
                </div>
              ))}
              
              {/* Videos */}
              {project.videos.map((video, i) => (
                <div key={`video-${i}`} className="aspect-[4/3] bg-black overflow-hidden relative group">
                  <video src={video.src} controls className="h-full w-full object-cover" />
                  <div className="absolute top-2 left-2 bg-navy-900/80 text-white px-2 py-1 text-[10px] font-mono uppercase tracking-wider">▶ Vidéo</div>
                </div>
              ))}
            </div>

            {/* Audio (if any) */}
            {project.audio.length > 0 && (
              <div className="mt-10 max-w-md">
                <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-3">Témoignages audio</p>
                {project.audio.map((aud, i) => (
                  <div key={`audio-${i}`} className="bg-white border border-mist-200 p-4 mb-3">
                    <p className="text-sm text-navy-900 mb-3">{aud.label}</p>
                    <audio src={aud.src} controls className="w-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Timeline Section */}
        {project.timeline && (
          <div className="w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-24 bg-white border-b border-mist-200">
            <h2 className="font-display text-2xl text-navy-900 mb-8">Chronologie du chantier</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['before', 'during', 'after'].map((phase) => (
                project.timeline[phase] && project.timeline[phase].length > 0 && (
                  <div key={phase}>
                    <p className="font-mono text-[11px] uppercase tracking-label text-water-600 mb-4">
                      {phase === 'before' ? 'Avant' : phase === 'during' ? 'Pendant' : 'Après'}
                    </p>
                    <div className="space-y-4">
                      {project.timeline[phase].map((item, i) => (
                        <div key={i} className="aspect-[4/3] bg-mist-100 overflow-hidden">
                          <img src={item.src} alt={item.caption} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Associated Team */}
        {associatedMembers.length > 0 && (
          <div className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-white border-b border-mist-200">
            <h2 className="font-display text-2xl text-navy-900 mb-6">Équipe du projet</h2>
            <div className="flex flex-wrap gap-6">
              {associatedMembers.map(m => (
                <div key={m.id} className="flex items-center gap-4 bg-mist-50 border border-mist-200 p-4 pr-8">
                  <img src={m.photo} alt={m.fullName} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[14px] font-medium text-navy-900">{m.fullName}</p>
                    <p className="text-[11px] font-mono uppercase tracking-label text-water-600">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next Navigation */}
        <div className="w-full px-5 sm:px-8 lg:px-12 py-12 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link to={`/realisations/${prevProject.slug}`} className="group flex flex-col items-start">
              <span className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 group-hover:text-water-600">← Projet précédent</span>
              <span className="font-display text-xl text-navy-900 group-hover:text-water-600">{prevProject.title}</span>
            </Link>
          ) : <div />}
          
          {nextProject ? (
            <Link to={`/realisations/${nextProject.slug}`} className="group flex flex-col items-end">
              <span className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 group-hover:text-water-600">Projet suivant →</span>
              <span className="font-display text-xl text-navy-900 group-hover:text-water-600">{nextProject.title}</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}