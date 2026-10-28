import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import Assistant from '../components/sections/Assistant';
import Contact from '../components/sections/Contact'; // The Quote Builder
import Founder from '../components/sections/Founder';
import Hero from '../components/sections/Hero';
import Journey from '../components/sections/Journey';
import Realisations from '../components/sections/Realisations';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import Zone from '../components/sections/Zone';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <Journey />
        <Services />
        <Founder />
        <Realisations />
        <Assistant />
        <WhyUs />
        <Contact />
        <Zone />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}