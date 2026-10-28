
export default function QuoteReview({ data, onEdit }) {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
      <div className="mb-8">
        <h3 className="font-display text-2xl text-navy-900">Vérification</h3>
        <p className="mt-2 text-sm text-navy-700">
          Vérifiez les informations ci-dessous avant de générer votre message.
        </p>
      </div>

      <div className="border border-mist-200 bg-white divide-y divide-mist-200">
        <div className="p-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 mb-1">Type de projet</p>
          <p className="text-[15px] text-navy-900 font-medium">{data.projectType}</p>
        </div>
        <div className="p-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 mb-1">Nom</p>
          <p className="text-[15px] text-navy-900">{data.name}</p>
        </div>
        <div className="p-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 mb-1">Téléphone</p>
          <p className="text-[15px] text-navy-900">{data.phone}</p>
        </div>
        <div className="p-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 mb-1">Localisation</p>
          <p className="text-[15px] text-navy-900">{data.location}</p>
        </div>
        <div className="p-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 mb-1">Description</p>
          <p className="text-[15px] text-navy-900 whitespace-pre-wrap">{data.description}</p>
        </div>
        {data.deadline && (
          <div className="p-4 sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-label text-navy-700/60 mb-1">Échéance</p>
            <p className="text-[15px] text-navy-900">{data.deadline}</p>
          </div>
        )}
      </div>

      <div className="mt-auto pt-6">
        <button
          onClick={onEdit}
          className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 underline decoration-mist-200 underline-offset-4"
        >
          ← Modifier mes informations
        </button>
      </div>
    </div>
  );
}