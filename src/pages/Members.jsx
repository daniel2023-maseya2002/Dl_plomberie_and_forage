import { useState } from 'react';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import MemberCard from '../components/primitives/MemberCard';
import MemberModal from '../components/primitives/MemberModal';
import SectionLabel from '../components/primitives/SectionLabel';
import { members } from '../lib/members';

export default function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Separate the founder from the rest of the team
  const founder = members.find((m) => m.isFounder);
  const team = members.filter((m) => !m.isFounder);

  return (
    <>
      <Navbar />
      <main className="bg-white pb-16 lg:pb-0 w-full overflow-hidden">
        
        {/* Page Header */}
        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-14 lg:pt-28 lg:pb-20">
          <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionLabel index="08">Notre équipe</SectionLabel>
              <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-navy-900">
                Les visages derrière<br />
                <span className="italic text-water-600">votre eau.</span>
              </h1>
            </div>
            <div className="flex items-end lg:col-span-5">
              <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
                DL Plomberie & Forage est une entreprise locale, dirigée par des professionnels du terrain. 
                Chaque intervention est supervisée par notre équipe technique à Kinshasa.
              </p>
            </div>
          </header>
        </div>

        {/* Prominent Founder Section */}
        {founder && (
          <div className="w-full bg-mist-50 border-y border-mist-200">
            <div className="w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden bg-mist-200">
                    <img 
                      src={founder.photo} 
                      alt={founder.fullName} 
                      className="absolute inset-0 h-full w-full object-cover object-top" 
                    />
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-mono text-[11px] uppercase tracking-label text-water-600 mb-3">
                    Fondateur & Responsable
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl text-navy-900 mb-4">
                    {founder.fullName}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-navy-700 max-w-prose mb-6">
                    {founder.intro}
                  </p>
                  
                  {/* Qualifications & Specialties */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-mist-200">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-3">Formation & Expérience</p>
                      <ul className="space-y-2">
                        {founder.qualifications.map((q, i) => (
                          <li key={i} className="flex items-start gap-2 text-[14px] text-navy-700">
                            <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-water-500" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-3">Spécialités</p>
                      <div className="flex flex-wrap gap-2">
                        {founder.specialties.map((s) => (
                          <span key={s} className="px-3 py-1 bg-white border border-mist-200 text-[12px] text-navy-700 font-mono uppercase">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Grid (if other members exist) */}
        {team.length > 0 && (
          <div className="w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
            <h2 className="font-display text-2xl text-navy-900 mb-8 border-b border-mist-200 pb-4">
              Le reste de l'équipe
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <MemberCard 
                  key={member.id} 
                  member={member} 
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
      <MobileActionBar />

      {/* Modal for Member Details */}
      <MemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </>
  );
}