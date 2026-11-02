import { Link } from 'react-router-dom';
import { featuredTestimonials } from '../../lib/testimonials';
import ArrowIcon from '../primitives/ArrowIcon';
import SectionLabel from '../primitives/SectionLabel';

export default function TestimonialsPreview() {
  if (!featuredTestimonials || featuredTestimonials.length === 0) return null;

  return (
    <section id="temoignages" className="bg-mist-50 scroll-mt-20 w-full overflow-hidden border-t border-mist-200">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        
        {/* Header */}
        <header className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <div className="lg:col-span-7">
            <SectionLabel index="09">Témoignages clients</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Ce que nos clients<br />
              <span className="italic text-water-600">racontent.</span>
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="max-w-prose text-[15px] leading-relaxed text-navy-700">
              Retours d'expérience de particuliers, commerces et institutions
              que nous avons accompagnés à Kinshasa.
            </p>
          </div>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTestimonials.map((t) => (
            <article key={t.id} className="bg-white border border-mist-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-water-600 mb-4">
                  {t.service} · {t.neighbourhood}
                </p>
                <h3 className="font-display text-xl leading-snug text-navy-900 mb-4">
                  {t.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-navy-700 mb-6">
                  {t.excerpt}
                </p>
              </div>
              
              <div className="mt-auto border-t border-mist-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium text-navy-900">{t.clientName}</p>
                  <p className="text-[11px] text-navy-700/70">{t.date}</p>
                </div>
                <Link 
                  to={`/blog/${t.slug}`}
                  className="font-mono text-[10px] uppercase tracking-label text-navy-900 hover:text-water-600 inline-flex items-center gap-1"
                >
                  Lire <ArrowIcon className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to full blog */}
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-mist-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-prose text-sm text-navy-700">
            Retrouvez tous les témoignages de nos clients.
          </p>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-900 hover:text-water-600"
          >
            Voir tous les témoignages
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}