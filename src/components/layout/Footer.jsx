import { Link } from 'react-router-dom';
import { SITE, telLink, waLink } from '../../lib/site';
import Logo from '../primitives/Logo';
import PhoneIcon from '../primitives/PhoneIcon';
import WhatsAppIcon from '../primitives/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white w-full overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="[&_span]:!text-white">
              <Logo size="lg" variant="dark" />
            </div>
            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-white/70">
              Plomberie, forage et solutions liées à l'eau à Kinshasa. Interventions pour particuliers, entreprises et institutions.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-cyan-400">
              {SITE.zone} · {SITE.city}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-label text-cyan-400">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>
                <a href={telLink} className="inline-flex items-center gap-2 hover:text-white">
                  <PhoneIcon className="h-3.5 w-3.5" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={waLink('Bonjour DL Plomberie & Forage, je vous contacte depuis votre site web.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
              <li className="text-white/60">Sur rendez-vous</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-label text-cyan-400">Suivre & naviguer</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><Link to="/realisations" className="hover:text-white">Réalisations</Link></li>
              <li><a href="/#services" className="hover:text-white">Services</a></li>
              <li><a href="/#contact" className="hover:text-white">Contact</a></li>
              <li><a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href={SITE.tiktok.url} target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-navy-700 py-6 text-[12px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <p className="font-mono uppercase tracking-label">Kinshasa · RDC</p>
        </div>
      </div>
    </footer>
  );
}