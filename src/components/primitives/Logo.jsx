import logo from '../../assets/logo.png';
import { SITE } from '../../lib/site';

export default function Logo({ size = 'md', variant = 'light' }) {
  const sizes = {
    md: { img: 'h-10 w-auto', text: 'text-base' },
    lg: { img: 'h-12 w-auto', text: 'text-lg' },
  };
  const s = sizes[size];

  const titleColor = variant === 'dark' ? 'text-white' : 'text-navy-900';
  const subColor   = variant === 'dark' ? 'text-cyan-400' : 'text-water-600';

  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="DL Plomberie & Forage"
        className={`${s.img} object-contain`}
        width="160"
        height="48"
      />
      <div className="hidden flex-col leading-tight sm:flex">
        <span className={`font-display ${s.text} ${titleColor}`}>
          DL Plomberie
        </span>
        <span className={`font-mono text-[10px] uppercase tracking-label ${subColor}`}>
          &amp; Forage · {SITE.city}
        </span>
      </div>
    </div>
  );
}