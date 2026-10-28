import { SITE } from '../../lib/site';
import SectionLabel from '../primitives/SectionLabel';

export default function AboutStory() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Narrative */}
          <div className="lg:col-span-7">
            <SectionLabel index="02">L'entreprise</SectionLabel>

            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] text-navy-900">
              Un métier technique,<br />
              une exigence de terrain.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-navy-700">
              <p>
                DL Plomberie &amp; Forage est une entreprise basée à
                {' '}{SITE.zone}, à {SITE.city}. Nous intervenons sur trois
                domaines liés à l'eau : la plomberie (installations,
                réparations, réseaux), le forage (étude, réalisation, mise
                en service), et l'approvisionnement en eau (pompes,
                réservoirs, maintenance).
              </p>
              <p>
                Notre activité s'adresse à des besoins très différents — une
                fuite à réparer dans une maison, une installation sanitaire
                complète pour un immeuble, un forage pour une école ou une
                exploitation agricole. Ce qui ne change pas, c'est la méthode :
                comprendre la situation avant d'intervenir, proposer une
                solution dimensionnée, et livrer un travail qui tient.
              </p>
              <p>
                Nous ne prétendons pas être la plus grande entreprise de
                {' '}{SITE.city}. Nous travaillons à être celle dont les
                clients recommandent le travail.
              </p>
            </div>
          </div>

          {/* Repères */}
          <div className="lg:col-span-5">
            <div className="border border-mist-200 bg-mist-50 p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-label text-water-600">
                Repères
              </p>

              <dl className="mt-6 divide-y divide-mist-200">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Zone d'implantation</dt>
                  <dd className="text-right text-[13px] text-navy-900">{SITE.zone}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Ville</dt>
                  <dd className="text-right text-[13px] text-navy-900">{SITE.city}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Responsable</dt>
                  <dd className="text-right text-[13px] text-navy-900">{SITE.founder.fullName}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Titre</dt>
                  <dd className="text-right text-[13px] text-navy-900">{SITE.founder.title}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Expérience</dt>
                  <dd className="text-right text-[13px] text-navy-900">{SITE.founder.experience}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Formation</dt>
                  <dd className="text-right text-[13px] text-navy-900">Certificat INPP</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-navy-700">Domaines</dt>
                  <dd className="text-right text-[13px] text-navy-900">Plomberie · Forage · Eau</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}