export default function MemberCard({ member, onClick }) {
  return (
    <div 
      className="group cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist-100 mb-4">
        {member.photo ? (
          <img 
            src={member.photo} 
            alt={member.fullName} 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-navy-700/40">
            <span className="font-mono text-[10px] uppercase tracking-label">Photo à fournir</span>
          </div>
        )}
      </div>
      <h3 className="font-display text-xl text-navy-900 group-hover:text-water-600 transition-colors">
        {member.fullName}
      </h3>
      <p className="font-mono text-[11px] uppercase tracking-label text-water-600 mt-1">
        {member.role}
      </p>
    </div>
  );
}