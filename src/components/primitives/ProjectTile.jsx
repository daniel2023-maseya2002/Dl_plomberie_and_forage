import { Link } from 'react-router-dom';

const aspectClass = {
  landscape: 'aspect-[4/3]',
  portrait:  'aspect-[4/5]',
  square:    'aspect-square',
};

export function FeatureProject({ project, onMediaClick }) {
  // Check if the cover is a video
  const isVideoCover = project.cover?.toString().endsWith('.mp4');

  return (
    <article className="grid grid-cols-1 gap-0 overflow-hidden border border-mist-200 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div 
          className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-mist-100 group" 
          onClick={() => onMediaClick?.(project)}
        >
          {isVideoCover ? (
            <video 
              src={project.cover} 
              muted 
              loop 
              playsInline 
              autoPlay
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-8 text-center">
              <p className="font-mono text-[10px] uppercase tracking-label text-water-600">Média à fournir</p>
            </div>
          )}
          
          {/* Play Button Overlay for Videos */}
          {isVideoCover && (
            <div className="absolute inset-0 flex items-center justify-center bg-navy-900/20 pointer-events-none">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white">
                ▶
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between bg-mist-50 p-6 lg:col-span-5 lg:p-10">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
            Projet · {project.type}
          </p>
          <h3 className="mt-4 font-display text-2xl leading-tight text-navy-900 lg:text-3xl">
            {project.title}
          </h3>
          {project.description && (
            <p className="mt-4 text-[14px] leading-relaxed text-navy-700">
              {project.description}
            </p>
          )}
        </div>
        <div className="mt-8 flex items-baseline justify-between border-t border-mist-200 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-label text-navy-700">
            {project.location}
          </span>
          <Link
            to={`/realisations/${project.slug}`}
            className="font-mono text-[10px] uppercase tracking-label text-water-600 hover:text-navy-900"
          >
            Voir →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProjectTile({ project, onMediaClick }) {
  const isVideo = project.image?.toString().endsWith('.mp4');

  return (
    <article className="group">
      <div className="cursor-pointer" onClick={() => onMediaClick?.(project)}>
        <div className={`relative w-full overflow-hidden bg-mist-100 ${aspectClass[project.aspect] || aspectClass.square}`}>
          
          {isVideo ? (
            <video 
              src={project.image} 
              muted 
              loop 
              playsInline 
              autoPlay
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center">
              <p className="font-mono text-[10px] uppercase tracking-label text-water-600">Média à fournir</p>
            </div>
          )}

          {isVideo && (
            <div className="absolute bottom-3 right-3 bg-navy-900/90 px-3 py-1.5 text-white rounded text-[10px] font-mono tracking-wider">
              ▶ Vidéo
            </div>
          )}
        </div>

        <div className="mt-3 flex items-baseline justify-between gap-4">
          <p className="truncate text-[14px] text-navy-900 group-hover:text-water-600 font-medium">
            {project.title}
          </p>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-label text-navy-700">
            {project.type}
          </span>
        </div>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-navy-700/70">
          {project.location}
        </p>
      </div>
    </article>
  );
}