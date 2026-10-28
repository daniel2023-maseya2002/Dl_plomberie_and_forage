import { useEffect, useState } from 'react';
import { telLink, waLink } from '../../lib/site';
import ArrowIcon from '../primitives/ArrowIcon';
import PhoneIcon from '../primitives/PhoneIcon';
import WhatsAppIcon from '../primitives/WhatsAppIcon';

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy-700 bg-navy-900 transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-3 divide-x divide-navy-700">
        <a href={telLink} className="flex flex-col items-center justify-center gap-1 py-3 text-white">
          <PhoneIcon className="h-4 w-4" />
          <span className="font-mono text-[10px] uppercase tracking-label">Appeler</span>
        </a>
        <a
          href={waLink('Bonjour DL Plomberie & Forage, je souhaite des informations.')}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="font-mono text-[10px] uppercase tracking-label">WhatsApp</span>
        </a>
        <a
          href="/#contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-white text-navy-900"
        >
          <ArrowIcon className="h-4 w-4" />
          <span className="font-mono text-[10px] uppercase tracking-label">Devis</span>
        </a>
      </div>
    </div>
  );
}