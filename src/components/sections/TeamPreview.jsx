import { useState } from 'react';
import { Link } from 'react-router-dom';
import { members } from '../../lib/members';
import ArrowIcon from '../primitives/ArrowIcon';
import MemberCard from '../primitives/MemberCard';
import MemberModal from '../primitives/MemberModal';
import SectionLabel from '../primitives/SectionLabel';

export default function TeamPreview() {
  const [selectedMember, setSelectedMember] = useState(null);

  const founder = members.find((m) => m.isFounder);
  const team = members.filter((m) => !m.isFounder);

  return (
    <section id="equipe" className="bg-white scroll-mt-20 w-full overflow-hidden border-t border-mist-200">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        
        {/* Header */}
        <header className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <div className="lg:col-span-7">
            <SectionLabel index="05">Notre équipe</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Les visages derrière<br />
              <span className="italic text-water-600">votre eau.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
              DL Plomberie & Forage est une entreprise locale, dirigée par des professionnels du terrain. 
              Chaque intervention est supervisée par notre équipe technique à Kinshasa.
            </p>
          </div>
        </header>

        {/* Founder + Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder card (left, larger) */}
          {founder && (
            <div className="lg:col-span-5 group cursor-pointer" onClick={() => setSelectedMember(founder)}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist-100">
                <img 
                  src={founder.photo} 
                  alt={founder.fullName} 
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" 
                />
              </div>
              <div className="mt-4">
                <p className="font-mono text-[10px] uppercase tracking-label text-water-600">Fondateur & Responsable</p>
                <h3 className="font-display text-2xl text-navy-900 mt-1 group-hover:text-water-600 transition-colors">
                  {founder.fullName}
                </h3>
                <p className="text-[14px] text-navy-700 mt-2 max-w-prose line-clamp-2">
                  {founder.intro}
                </p>
              </div>
            </div>
          )}

          {/* Team grid (right, 3 members) */}
          <div className="lg:col-span-7">
            {team.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {team.map((member) => (
                  <MemberCard 
                    key={member.id} 
                    member={member} 
                    onClick={() => setSelectedMember(member)} 
                  />
                ))}
              </div>
            ) : (
              <div className="border border-mist-200 bg-mist-50 p-8 text-center">
                <p className="text-navy-700 text-sm">D'autres membres rejoindront bientôt l'équipe.</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA to full team page */}
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-mist-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-sm text-navy-700">
            Découvrez le parcours et les spécialités de chaque membre.
          </p>
          <Link
            to="/membres"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
          >
            Voir toute l'équipe
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      <MemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  );
}