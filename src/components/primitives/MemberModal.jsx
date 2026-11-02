import { useEffect } from 'react';

export default function MemberModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 p-4 sm:p-8 backdrop-blur-md" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-cyan-400 font-mono text-[12px] uppercase tracking-widest z-10">
        Fermer ✕
      </button>

      <div className="relative max-h-full w-full max-w-3xl bg-white flex flex-col sm:flex-row overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Photo */}
        <div className="w-full sm:w-1/2 aspect-[4/5] sm:aspect-auto bg-mist-100 relative">
          {member.photo ? (
            <img src={member.photo} alt={member.fullName} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-navy-700/40">Photo à fournir</div>
          )}
        </div>

        {/* Content */}
        <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col overflow-y-auto">
          <p className="font-mono text-[10px] uppercase tracking-label text-water-600 mb-2">{member.role}</p>
          <h2 className="font-display text-3xl text-navy-900 mb-4">{member.fullName}</h2>
          <p className="text-[15px] leading-relaxed text-navy-700 mb-6">{member.intro}</p>
          
          {member.qualifications && (
            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-2">Qualifications</p>
              <ul className="space-y-1">
                {member.qualifications.map((q, i) => (
                  <li key={i} className="text-[14px] text-navy-700 flex gap-2"><span className="text-water-500">•</span> {q}</li>
                ))}
              </ul>
            </div>
          )}

          {member.specialties && (
            <div className="mb-8">
              <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-2">Spécialités</p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span key={s} className="px-2 py-1 bg-mist-50 border border-mist-200 text-[11px] text-navy-700 font-mono uppercase">{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}