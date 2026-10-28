import { useState } from 'react';
import { journeyStages } from '../../lib/journeyStages';
import JourneyIllustration from '../primitives/JourneyIllustration';
import SectionLabel from '../primitives/SectionLabel';

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = journeyStages[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(journeyStages.length - 1, prev + 1));
  };

  return (
    <section id="parcours" className="bg-mist-50 scroll-mt-20 w-full overflow-hidden border-t border-mist-200">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        
        {/* Section Header */}
        <header className="max-w-prose">
          <SectionLabel index="02">De la source à l'eau</SectionLabel>
          <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
            Découvrez les grandes étapes d'un projet de forage.
          </h2>
        </header>

        {/* Progress Bar */}
        <div className="mt-12 flex gap-2">
          {journeyStages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Aller à l'étape ${stage.index}`}
              className={`h-1.5 flex-1 transition-colors duration-300 ${
                idx <= activeIndex ? 'bg-water-500' : 'bg-mist-200'
              }`}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Timeline Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-1">
            {journeyStages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-current={isActive ? 'step' : undefined}
                  className={`group flex items-center justify-between border-l-2 px-4 py-4 text-left transition-all duration-300 ${
                    isActive 
                      ? 'border-water-500 bg-white shadow-sm' 
                      : 'border-mist-200 hover:border-water-600 hover:bg-mist-100'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`font-mono text-[10px] uppercase tracking-label ${isActive ? 'text-water-600' : 'text-navy-700/60'}`}>
                      Étape {stage.index}
                    </span>
                    <span className={`mt-1 font-display text-lg ${isActive ? 'text-navy-900' : 'text-navy-700'}`}>
                      {stage.title}
                    </span>
                  </div>
                  <span className={`font-mono text-lg ${isActive ? 'text-water-500' : 'text-mist-200 group-hover:text-water-600'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Illustration & Text */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Illustration Card */}
            <div className="w-full aspect-[4/3] bg-white border border-mist-200 flex items-center justify-center p-6 relative">
              <JourneyIllustration stageId={activeStage.id} />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-label text-water-600 bg-white px-2 py-1 border border-mist-200">
                Schéma technique
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-8 flex flex-col flex-1">
              <h3 className="font-display text-2xl text-navy-900">
                {activeStage.title}
              </h3>
              <p className="mt-2 text-[15px] italic text-water-600">
                {activeStage.subtitle}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-700">
                {activeStage.description}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-700/80">
                {activeStage.details}
              </p>

              {/* Navigation Buttons */}
              <div className="mt-auto pt-10 flex items-center justify-between border-t border-mist-200">
                <button
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 disabled:opacity-30 disabled:hover:text-navy-700"
                >
                  ← Précédent
                </button>
                <span className="font-mono text-[11px] text-navy-700/60">
                  {activeIndex + 1} / {journeyStages.length}
                </span>
                <button
                  onClick={handleNext}
                  disabled={activeIndex === journeyStages.length - 1}
                  className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 disabled:opacity-30 disabled:hover:text-navy-700"
                >
                  Suivant →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}