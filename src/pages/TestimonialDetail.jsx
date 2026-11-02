import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';
import Navbar from '../components/layout/Navbar';
import ArrowIcon from '../components/primitives/ArrowIcon';
import SectionLabel from '../components/primitives/SectionLabel';
import { testimonialBySlug } from '../lib/testimonials';

export default function TestimonialDetail() {
  const { slug } = useParams();
  const t = testimonialBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!t) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-display text-navy-900 mb-4">Témoignage introuvable</h1>
        <Link to="/blog" className="text-water-600 underline">Retour aux témoignages</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white pb-16 lg:pb-0 w-full overflow-hidden">

        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-14 lg:pt-28 lg:pb-20 border-b border-mist-200">
          <div className="mb-6">
            <Link to="/blog" className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 inline-flex items-center gap-2">
              ← Retour aux témoignages
            </Link>
          </div>

          <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <SectionLabel index="09">Témoignage · {t.service}</SectionLabel>
              <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-navy-900 mb-6">
                {t.title}
              </h1>
              <p className="text-[15px] leading-relaxed text-navy-700 max-w-prose">
                {t.excerpt}
              </p>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-mist-200 lg:pl-8">
              <p className="font-mono text-[10px] uppercase tracking-label text-water-600">Client</p>
              <p className="mt-2 text-[15px] text-navy-900">{t.clientName}</p>
              <p className="text-[13px] text-navy-700">{t.neighbourhood}</p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-label text-water-600">Date</p>
              <p className="mt-2 text-[15px] text-navy-900">{t.date}</p>
            </div>
          </header>
        </div>

        {/* Body */}
        <div className="w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto space-y-6">
            {t.body.map((paragraph, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-navy-700">
                {paragraph}
              </p>
            ))}

            {t.audio && (
              <div className="mt-10 p-4 bg-mist-50 border border-mist-200">
                <p className="font-mono text-[10px] uppercase tracking-label text-navy-700 mb-3">Témoignage audio</p>
                <audio src={t.audio} controls className="w-full" />
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full px-5 sm:px-8 lg:px-12 pb-16 lg:pb-24">
          <div className="max-w-3xl mx-auto border-t border-mist-200 pt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-navy-700">Un projet similaire en tête ?</p>
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
            >
              Demander un devis
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}