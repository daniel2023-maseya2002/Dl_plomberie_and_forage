import { useState } from 'react';
import { PROJECT_TYPES, buildQuoteMessage, validateStep1, validateStep2 } from '../../lib/quoteBuilder';
import { SITE, telLink, waLink } from '../../lib/site';
import ArrowIcon from '../primitives/ArrowIcon';
import Button from '../primitives/Button';
import { Field, TextArea, TextInput } from '../primitives/Field';
import PhoneIcon from '../primitives/PhoneIcon';
import QuoteReview from '../primitives/QuoteReview';
import QuoteStep from '../primitives/QuoteStep';
import SectionLabel from '../primitives/SectionLabel';
import WhatsAppIcon from '../primitives/WhatsAppIcon';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    projectType: '',
    name: '',
    phone: '',
    location: '',
    description: '',
    deadline: '',
  });
  const [error, setError] = useState('');
  const [fallbackUrl, setFallbackUrl] = useState('');

  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const handleNext = () => {
    setError('');
    
    if (step === 1) {
      const val = validateStep1(data);
      if (!val.ok) return setError(val.error);
      setStep(2);
    } 
    else if (step === 2) {
      const val = validateStep2(data);
      if (!val.ok) return setError(val.error);
      setStep(3);
    } 
    else if (step === 3) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setError('');
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = () => {
    const message = buildQuoteMessage(data);
    const url = waLink(message);
    
    // Attempt to open WhatsApp
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    
    // If the browser blocked the popup, show the fallback button
    if (!win) {
      setFallbackUrl(url);
      setError('Votre navigateur a bloqué l\'ouverture de WhatsApp. Cliquez sur le bouton ci-dessous.');
    } else {
      // On successful open, we move to step 4 (confirmation screen)
      setStep(4);
    }
  };

  const handleRestart = () => {
    setStep(1);
    setData({ projectType: '', name: '', phone: '', location: '', description: '', deadline: '' });
    setError('');
    setFallbackUrl('');
  };

  return (
    <section id="contact" className="bg-white scroll-mt-20 w-full overflow-hidden border-t border-mist-200">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT — Contact Info (Persistent) */}
          <div className="lg:col-span-5">
            <SectionLabel index="08">Contact & devis</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Parlons de votre projet.
            </h2>
            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-navy-700">
              Décrivez votre besoin et préparez une demande que vous pourrez
              transmettre directement à notre équipe sur WhatsApp.
            </p>

            {/* Direct Actions */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href={telLink} className="flex items-start gap-3 border border-mist-200 p-4 hover:border-navy-900 transition-colors">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-water-600" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-label text-navy-700">Téléphone</p>
                  <p className="mt-1 text-sm text-navy-900">{SITE.phone}</p>
                </div>
              </a>
              <a href={waLink('Bonjour DL Plomberie & Forage, je souhaite des informations.')} target="_blank" rel="noreferrer" className="flex items-start gap-3 border border-mist-200 p-4 hover:border-navy-900 transition-colors">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-water-600" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-label text-navy-700">WhatsApp</p>
                  <p className="mt-1 text-sm text-navy-900">Message direct</p>
                </div>
              </a>
            </div>

            {/* Contact Details */}
            <dl className="mt-10 border-t border-mist-200 pt-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-navy-700">Zone</dt>
                  <dd className="mt-1 text-sm text-navy-900">{SITE.zone}</dd>
                  <dd className="text-sm text-navy-700">{SITE.city} · {SITE.country}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-navy-700">Responsable</dt>
                  <dd className="mt-1 text-sm text-navy-900">{SITE.founder.fullName}</dd>
                  <dd className="text-sm text-navy-700">{SITE.founder.title}</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* RIGHT — Guided Form */}
          <div className="lg:col-span-7">
            <div className="border border-mist-200 bg-mist-50 p-6 sm:p-8 lg:p-10 min-h-[500px] flex flex-col">
              
              {/* Progress Bar */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className={`h-1.5 flex-1 transition-colors duration-300 ${step >= s ? 'bg-water-500' : 'bg-mist-200'}`} />
                ))}
              </div>

              {/* STEP 1 — Project Type */}
              {step === 1 && (
                <QuoteStep title="Quel est votre projet ?" subtitle="Sélectionnez le type de travaux.">
                  <div className="flex flex-col gap-3">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setData({ ...data, projectType: t })}
                        className={`group flex items-center justify-between w-full text-left p-4 border transition-all duration-200 ${
                          data.projectType === t 
                            ? 'border-water-500 bg-water-50 text-water-900' 
                            : 'border-mist-200 bg-white hover:border-water-500'
                        }`}
                      >
                        <span className="font-medium text-[15px]">{t}</span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${data.projectType === t ? 'border-water-500' : 'border-mist-200 group-hover:border-water-500'}`}>
                           {data.projectType === t && <div className="w-2 h-2 bg-water-500 rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  {error && <p className="text-red-700 text-sm mt-4">{error}</p>}
                  
                  <div className="mt-8 pt-6 border-t border-mist-200 flex justify-end">
                    <Button onClick={handleNext} variant="primary" size="md" disabled={!data.projectType}>
                      Continuer <ArrowIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </QuoteStep>
              )}

              {/* STEP 2 — Details */}
              {step === 2 && (
                <QuoteStep title="Vos informations" subtitle="Ces informations nous permettront de vous recontacter.">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" htmlFor="q-name" required>
                      <TextInput id="q-name" placeholder="Votre nom" value={data.name} onChange={update('name')} />
                    </Field>
                    <Field label="Téléphone" htmlFor="q-phone" required>
                      <TextInput id="q-phone" type="tel" placeholder="+243 …" value={data.phone} onChange={update('phone')} />
                    </Field>
                    <Field label="Commune / Quartier" htmlFor="q-loc" required>
                      <TextInput id="q-loc" placeholder="Ex : Mikonga 2" value={data.location} onChange={update('location')} />
                    </Field>
                    <Field label="Échéance souhaitée" htmlFor="q-dead" hint="facultatif">
                      <TextInput id="q-dead" placeholder="Ex : Dans 2 semaines" value={data.deadline} onChange={update('deadline')} />
                    </Field>
                  </div>
                  <div className="mt-5">
                    <Field label="Description du besoin" htmlFor="q-desc" required>
                      <TextArea id="q-desc" placeholder="Quelques mots sur votre besoin, l'état actuel de l'installation…" value={data.description} onChange={update('description')} />
                    </Field>
                  </div>
                  {error && <p className="text-red-700 text-sm mt-4">{error}</p>}

                  <div className="mt-8 pt-6 border-t border-mist-200 flex justify-between items-center">
                    <button onClick={handleBack} className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600">
                      ← Retour
                    </button>
                    <Button onClick={handleNext} variant="primary" size="md">
                      Continuer <ArrowIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </QuoteStep>
              )}

              {/* STEP 3 — Review */}
              {step === 3 && (
                <QuoteStep title="Vérification" subtitle="Vérifiez que tout est correct.">
                  <QuoteReview data={data} onEdit={() => setStep(2)} />
                  
                  {error && <p className="text-red-700 text-sm mt-4">{error}</p>}
                  {fallbackUrl && (
                    <div className="mt-4 p-4 border border-red-200 bg-red-50">
                      <a href={fallbackUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-red-800 underline">
                        Cliquez ici pour ouvrir WhatsApp manuellement
                      </a>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-mist-200 flex justify-between items-center">
                    <button onClick={handleBack} className="font-mono text-[11px] uppercase tracking-label text-navy-700 hover:text-water-600">
                      ← Retour
                    </button>
                    <Button onClick={handleNext} variant="primary" size="md">
                      <WhatsAppIcon className="h-4 w-4" />
                      Ouvrir WhatsApp
                    </Button>
                  </div>
                </QuoteStep>
              )}

              {/* STEP 4 — Success */}
              {step === 4 && (
                <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-500 py-12">
                  <div className="w-16 h-16 bg-water-50 rounded-full flex items-center justify-center mb-6">
                    <WhatsAppIcon className="h-8 w-8 text-water-500" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-900 mb-2">
                    Votre demande est prête
                  </h3>
                  <p className="text-[15px] text-navy-700 max-w-sm mb-8">
                    WhatsApp a été ouvert dans un nouvel onglet. Il ne vous reste plus qu'à appuyer sur « Envoyer » pour transmettre votre demande à notre équipe.
                  </p>
                  <Button onClick={handleRestart} variant="secondary" size="md">
                    Faire une nouvelle demande
                  </Button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}