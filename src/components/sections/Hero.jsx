import { useLocation, useNavigate } from 'react-router-dom';
import client1Img from '../../assets/client-1.jpeg';
import client2Img from '../../assets/client-2.jpeg';
import client3Img from '../../assets/client-3.jpeg';
import founderImg from '../../assets/founder.jpeg';
import heroPoster from '../../assets/hero-poster.png';
import { navigateToSection } from '../../lib/navigateToSection';
import { SITE, waLink } from '../../lib/site';
import ArrowIcon from '../primitives/ArrowIcon';
import AvatarStack from '../primitives/AvatarStack';
import Button from '../primitives/Button';
import WhatsAppIcon from '../primitives/WhatsAppIcon';

const teamAvatars = [
  { src: founderImg, alt: 'Ir Delivrance Maku' },
  { src: client1Img, alt: 'Client' },
  { src: client2Img, alt: 'Client' },
  { src: client3Img, alt: 'Client' },
];

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactScroll = (e) => {
    e.preventDefault();
    navigateToSection(navigate, '/', location.pathname, 'contact');
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[58fr_42fr]">
        
        {/* LEFT — Text Column */}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24 xl:px-24">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-16 bg-water-500" />
            <span className="eyebrow">Plomberie · Forage · {SITE.city}</span>
          </div>

          <h1 className="mt-8 max-w-[19ch] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-navy-900">
            L'eau, maîtrisée.<br />
            <span className="italic text-water-600">De la fuite au forage,</span><br />
            un seul interlocuteur.
          </h1>

          <p className="mt-7 max-w-prose text-[15px] leading-relaxed text-navy-700 sm:text-base">
            DL Plomberie &amp; Forage accompagne particuliers, entreprises et
            institutions à Kinshasa pour l'installation, la réparation et
            l'approvisionnement en eau. Étude, travaux, maintenance — un
            interlocuteur unique du diagnostic à la mise en service.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              as="a"
              href={waLink('Bonjour, je souhaite demander un devis. J\'ai vu votre site.')}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="lg"
            >
              Demander un devis
              <ArrowIcon className="h-4 w-4" />
            </Button>
            <Button
              as="a"
              href={waLink('Bonjour DL Plomberie & Forage, je souhaite un devis.')}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Tertiary Link to Journey */}
          <a
            href="#parcours"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection(navigate, '/', location.pathname, 'parcours');
            }}
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600 w-fit"
          >
            Voir comment nous travaillons
            <span aria-hidden="true">↓</span>
          </a>

          {/* Facts strip */}
          <div className="mt-12 flex flex-col gap-6 border-t border-mist-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-label text-navy-700">
              <span>{SITE.zone}</span>
              <span className="h-3 w-px bg-mist-200" />
              <span>{SITE.phone}</span>
              <span className="h-3 w-px bg-mist-200" />
              <span>Sur devis · {SITE.city}</span>
            </div>

            <div className="flex items-center gap-3">
              <AvatarStack avatars={teamAvatars} />
              <span className="font-mono text-[10px] uppercase tracking-label text-navy-700">
                Une équipe à {SITE.city}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — Real media column */}
        <div className="relative w-full overflow-hidden bg-mist-100">
          <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[560px]">
            <img
              src={heroPoster}
              alt="Chantier de forage à Kinshasa"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-20 bg-navy-900 px-5 py-3 text-white">
              <p className="font-mono text-[10px] uppercase tracking-label text-cyan-400">
                Chantier
              </p>
              <p className="mt-1 text-sm">Forage · {SITE.city}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}