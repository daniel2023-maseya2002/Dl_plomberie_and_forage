import { useEffect } from 'react';

export default function Lightbox({ project, onClose }) {
  // Close on Escape key & lock scroll
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 p-4 sm:p-8 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-cyan-400 font-mono text-[12px] uppercase tracking-widest z-10 transition-colors"
      >
        Fermer ✕
      </button>

      {/* Content container */}
      <div 
        className="relative max-h-full w-full max-w-5xl flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing
      >
        
        {/* VIDEO */}
        {project.mediaType === 'video' && project.mediaUrl && (
          <video 
            src={project.mediaUrl} 
            controls 
            autoPlay 
            className="max-h-[80vh] w-full rounded-lg shadow-2xl bg-black"
          />
        )}

        {/* AUDIO */}
        {project.mediaType === 'audio' && project.mediaUrl && (
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl text-center">
            <h3 className="font-display text-2xl text-navy-900 mb-6">{project.title}</h3>
            <audio src={project.mediaUrl} controls className="w-full" />
          </div>
        )}

        {/* IMAGE */}
        {project.mediaType === 'image' && project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        )}

        {/* Fallback if no media */}
        {!project.image && !project.mediaUrl && (
           <div className="bg-white p-12 text-center rounded-lg max-w-md">
             <p className="font-mono text-sm uppercase text-water-600">Média non disponible</p>
             <p className="mt-2 text-navy-900">{project.title}</p>
           </div>
        )}

        {/* Caption under media */}
        <div className="mt-6 text-center">
          <h3 className="text-white font-display text-2xl">{project.title}</h3>
          <p className="text-white/60 font-mono text-[11px] uppercase tracking-label mt-2">
            {project.type} · {project.location}
          </p>
        </div>

      </div>
    </div>
  );
}