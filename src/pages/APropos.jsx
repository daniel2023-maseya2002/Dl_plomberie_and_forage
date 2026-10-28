import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import SectionLabel from '../components/primitives/SectionLabel';
import AboutApproach from '../components/sections/AboutApproach';
import AboutEngagement from '../components/sections/AboutEngagement';
import AboutStory from '../components/sections/AboutStory';
import { SITE } from '../lib/site';

export default function APropos() {
  return (
    <>
      <Navbar />
      <main className="bg-white pb-16 lg:pb-0 w-full overflow-hidden">

        <div className="w-full px-5 sm:px-8 lg:px-12">
          <header className="grid grid-cols-1 gap-8 pt-20 pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-28 lg:pb-20">
            <div className="lg:col-span-7">
              <SectionLabel index="01">À propos</SectionLabel>
              <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-navy-900">
                Une entreprise construite<br />
                <span className="italic text-water-600">autour de l'eau.</span>
              </h1>
            </div>
            <div className="flex items-end lg:col-span-5">
              <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
                DL Plomberie &amp; Forage intervient à {SITE.city} sur les
                travaux de plomberie, de forage et d'approvisionnement en
                eau. Entreprise dirigée par {SITE.founder.fullName}.
              </p>
            </div>
          </header>
        </div>

        <AboutStory />
        <AboutApproach />
        <AboutEngagement />

      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}