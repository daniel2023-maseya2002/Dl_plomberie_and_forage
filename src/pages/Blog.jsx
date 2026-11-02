import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import ArrowIcon from '../components/primitives/ArrowIcon';
import SectionLabel from '../components/primitives/SectionLabel';
import { testimonials } from '../lib/testimonials';

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="bg-white pb-16 lg:pb-0 w-full overflow-hidden">

        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-14 lg:pt-28 lg:pb-20">
          <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionLabel index="09">Témoignages clients</SectionLabel>
              <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-navy-900">
                Ce que nos clients<br />
                <span className="italic text-water-600">racontent.</span>
              </h1>
            </div>
            <div className="flex items-end lg:col-span-5">
              <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
                Retours d'expérience de particuliers, commerces et institutions
                que nous avons accompagnés à Kinshasa.
              </p>
            </div>
          </header>
        </div>

        {/* Testimonials list */}
        <div className="w-full px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28">
          <div className="grid grid-cols-1 gap-12">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-mist-200 last:border-0 last:pb-0"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
                    {t.date}
                  </p>
                  <p className="mt-2 text-[15px] text-navy-900">{t.clientName}</p>
                  <p className="text-[13px] text-navy-700">{t.neighbourhood}</p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-label text-navy-700/70">
                    Service · {t.service}
                  </p>
                </div>

                <div className="lg:col-span-9">
                  <h2 className="font-display text-2xl lg:text-3xl text-navy-900 mb-4">
                    {t.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-navy-700 max-w-prose mb-6">
                    {t.excerpt}
                  </p>
                  <Link
                    to={`/blog/${t.slug}`}
                    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
                  >
                    Lire le témoignage complet
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {testimonials.length === 0 && (
            <p className="py-24 text-center text-sm text-navy-700">
              Les témoignages seront publiés bientôt.
            </p>
          )}
        </div>

      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}