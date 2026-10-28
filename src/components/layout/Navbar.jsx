import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navigateToSection } from '../../lib/navigateToSection';
import { SITE, telLink, waLink } from '../../lib/site';
import { useActiveSection } from '../../lib/useActiveSection';
import Button from '../primitives/Button';
import Logo from '../primitives/Logo';
import PhoneIcon from '../primitives/PhoneIcon';
import WhatsAppIcon from '../primitives/WhatsAppIcon';

// Sections tracked for the scroll-underline
const SECTIONS = ['parcours', 'services', 'assistant', 'contact'];

function NavItem({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors ${
          isActive ? 'text-navy-900' : 'text-navy-700 hover:text-water-600'
        }`
      }
    >
      {({ isActive }) => (
        <span className="relative inline-block py-1">
          {children}
          {isActive && (
            <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-water-500" />
          )}
        </span>
      )}
    </NavLink>
  );
}

function SectionLink({ sectionId, activeSection, onClick, children }) {
  const isActive = activeSection === sectionId;
  return (
    <a
      href={`/#${sectionId}`}
      onClick={onClick}
      className={`relative inline-block py-1 text-sm font-medium transition-colors ${
        isActive ? 'text-navy-900' : 'text-navy-700 hover:text-water-600'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-water-500" />
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection(location.pathname, SECTIONS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      navigateToSection(navigate, '/', location.pathname, sectionId);
    });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const isHome = location.pathname === '/' && activeSection === null;

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm transition-[border-color] duration-200 ${
          scrolled ? 'border-b border-mist-200' : 'border-b border-transparent'
        }`}
      >
        <div className="flex h-[72px] w-full items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <a href="/" onClick={handleHomeClick} aria-label="Accueil — DL Plomberie & Forage">
            <Logo />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-6 lg:flex">
            <a
              href="/"
              onClick={handleHomeClick}
              className={`relative inline-block py-1 text-sm font-medium transition-colors ${
                isHome ? 'text-navy-900' : 'text-navy-700 hover:text-water-600'
              }`}
            >
              Accueil
              {isHome && <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-water-500" />}
            </a>

            <NavItem to="/a-propos">À propos</NavItem>

            <SectionLink
              sectionId="parcours"
              activeSection={activeSection}
              onClick={(e) => handleSectionClick(e, 'parcours')}
            >
              Parcours
            </SectionLink>

            <SectionLink
              sectionId="services"
              activeSection={activeSection}
              onClick={(e) => handleSectionClick(e, 'services')}
            >
              Services
            </SectionLink>

            <NavItem to="/realisations">Réalisations</NavItem>

            <SectionLink
              sectionId="assistant"
              activeSection={activeSection}
              onClick={(e) => handleSectionClick(e, 'assistant')}
            >
              Assistant
            </SectionLink>

            <SectionLink
              sectionId="contact"
              activeSection={activeSection}
              onClick={(e) => handleSectionClick(e, 'contact')}
            >
              Contact
            </SectionLink>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={telLink}
              className="flex items-center gap-2 font-mono text-[12px] text-navy-700 hover:text-water-600"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {SITE.phone}
            </a>
            <Button
              as="a"
              href={waLink('Bonjour DL Plomberie & Forage, je souhaite demander un devis.')}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="md"
            >
              Demander un devis
            </Button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={telLink}
              aria-label="Appeler"
              className="flex h-10 w-10 items-center justify-center border border-mist-200 text-navy-900"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center border border-mist-200 text-navy-900"
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${open ? 'top-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${open ? 'top-1/2 -rotate-45' : 'bottom-0'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-30 bg-navy-900 lg:hidden">
          <div className="flex h-full flex-col px-5 py-10 sm:px-8">
            <nav className="flex flex-col gap-1">
              <a
                href="/"
                onClick={handleHomeClick}
                className={`group flex items-baseline gap-4 border-b border-navy-700 py-5 ${isHome ? 'text-cyan-400' : ''}`}
              >
                <span className="font-mono text-[11px] tracking-label text-cyan-400">01</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">Accueil</span>
              </a>

              <NavLink to="/a-propos" className="group flex items-baseline gap-4 border-b border-navy-700 py-5">
                <span className="font-mono text-[11px] tracking-label text-cyan-400">02</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">À propos</span>
              </NavLink>

              <a
                href="/#parcours"
                onClick={(e) => handleSectionClick(e, 'parcours')}
                className="group flex items-baseline gap-4 border-b border-navy-700 py-5"
              >
                <span className="font-mono text-[11px] tracking-label text-cyan-400">03</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">Parcours</span>
              </a>

              <a
                href="/#services"
                onClick={(e) => handleSectionClick(e, 'services')}
                className="group flex items-baseline gap-4 border-b border-navy-700 py-5"
              >
                <span className="font-mono text-[11px] tracking-label text-cyan-400">04</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">Services</span>
              </a>

              <NavLink to="/realisations" className="group flex items-baseline gap-4 border-b border-navy-700 py-5">
                <span className="font-mono text-[11px] tracking-label text-cyan-400">05</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">Réalisations</span>
              </NavLink>

              <a
                href="/#assistant"
                onClick={(e) => handleSectionClick(e, 'assistant')}
                className="group flex items-baseline gap-4 border-b border-navy-700 py-5"
              >
                <span className="font-mono text-[11px] tracking-label text-cyan-400">06</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">Assistant</span>
              </a>

              <a
                href="/#contact"
                onClick={(e) => handleSectionClick(e, 'contact')}
                className="group flex items-baseline gap-4 border-b border-navy-700 py-5"
              >
                <span className="font-mono text-[11px] tracking-label text-cyan-400">07</span>
                <span className="font-display text-3xl text-white group-hover:text-cyan-400">Devis</span>
              </a>
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <a
                href={waLink('Bonjour DL Plomberie & Forage, je souhaite des informations.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white px-5 py-4 text-sm font-medium text-navy-900"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 border border-white/30 px-5 py-4 font-mono text-sm text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}