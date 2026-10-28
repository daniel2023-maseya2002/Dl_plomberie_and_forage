import { waLink } from '../../lib/site';
import ArrowIcon from './ArrowIcon';
import WhatsAppIcon from './WhatsAppIcon';

export default function ServiceRow({ service, reverse = false }) {
  const { index, title, short, description, bullets, image, caption, waMessage } = service;

  return (
    <article className="grid grid-cols-1 gap-8 border-t border-mist-200 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
      {/* Text column */}
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-[11px] uppercase tracking-label text-water-600">
            {index}
          </span>
          <div className="h-px flex-1 bg-mist-200" />
        </div>

        <h3 className="mt-5 text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-navy-900">
          {title}
        </h3>
        <p className="mt-2 text-[15px] italic text-water-600">{short}</p>

        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-navy-700">
          {description}
        </p>

        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[14px] text-navy-700">
              <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-water-500" />
              {b}
            </li>
          ))}
        </ul>

        {/* CHANGED: Using the service-specific waMessage from the data */}
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-navy-900 underline decoration-mist-200 decoration-1 underline-offset-4 hover:text-water-600 hover:decoration-water-500"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          Discuter de ce service
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Image column */}
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist-100">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-label text-navy-700">
            {caption}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}