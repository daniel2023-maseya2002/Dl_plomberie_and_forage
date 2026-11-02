const aspectClass = {
  landscape: 'aspect-[4/3]',
  portrait:  'aspect-[4/5]',
  square:    'aspect-square',
};

export default function ProjectCard({ project, onMediaClick }) {
  // Check if the cover is a video
  const isVideoCover = project.cover?.toString().endsWith('.mp4');

  return (
    <article id={project.id} className="scroll-mt-24 group">
      <div 
        className="cursor-pointer"
        onClick={() => onMediaClick?.(project)}
      >
        <div className={`relative w-full overflow-hidden bg-mist-100 ${aspectClass[project.aspect] || aspectClass.square}`}>
          
          {/* Render Video Cover OR Image Cover */}
          {isVideoCover ? (
            <video 
              src={project.cover} 
              muted 
              loop 
              playsInline 
              autoPlay
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : project.cover || project.image ? (
            <img
              src={project.cover || project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
                  Média à fournir
                </p>
                <p className="mt-2 max-w-[22ch] text-xs text-navy-700">
                  {project.title}
                </p>
              </div>
            </div>
          )}
          
          {/* Video/Audio Badge */}
          {(project.mediaType === 'video' || project.mediaType === 'audio' || isVideoCover) && (
            <div className="absolute bottom-4 right-4 bg-navy-900/90 px-3 py-1.5 text-white rounded text-[10px] font-mono tracking-wider">
              {project.mediaType === 'audio' ? '🎵 Audio' : '▶ Vidéo'}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="truncate font-display text-lg text-navy-900">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-label text-water-600">
          {project.type || project.category}
        </span>
      </div>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-navy-700/70">
        {project.location || project.commune}
      </p>
      {project.description && (
        <p className="mt-3 max-w-prose text-[14px] leading-relaxed text-navy-700">
          {project.description}
        </p>
      )}
    </article>
  );
}