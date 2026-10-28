import { useState } from 'react';
import { assistantFlow, recommendations } from '../../lib/assistantFlow';
import AssistantResult from '../primitives/AssistantResult';
import AssistantStep from '../primitives/AssistantStep';
import SectionLabel from '../primitives/SectionLabel';

export default function Assistant() {
  // step: 'need' | 'plomberie' | 'forage' | 'pompe' | 'systeme' | 'autre' | 'result'
  const [step, setStep] = useState('need');
  const [answers, setAnswers] = useState({});
  const [freeText, setFreeText] = useState('');
  const [error, setError] = useState('');

  const handleSelect = (value) => {
    if (step === 'need') {
      // Moving from step 1 to step 2
      setAnswers({ ...answers, need: value });
      setStep(value);
    } else {
      // Moving from step 2 to result
      setAnswers({ ...answers, [step]: value });
      setStep('result');
    }
  };

  const handleFreeTextSubmit = (e) => {
    e.preventDefault();
    if (freeText.trim().length < 10) {
      setError('Merci de décrire votre besoin en quelques mots (au moins 10 caractères).');
      return;
    }
    setError('');
    setAnswers({ ...answers, autre: freeText });
    setStep('result');
  };

  const handleRestart = () => {
    setStep('need');
    setAnswers({});
    setFreeText('');
    setError('');
  };

  const handleBack = () => {
    setStep('need');
    setError('');
  };

  // Compute the recommendation key
  let recKey = '';
  if (answers.need === 'autre') {
    recKey = 'autre';
  } else if (answers.need && answers[answers.need]) {
    recKey = `${answers.need}-${answers[answers.need]}`;
  }

  const currentRec = recommendations[recKey];
  const currentStepData = step !== 'result' ? assistantFlow[step] : null;
  const isFirstStep = step === 'need';

  return (
    <section id="assistant" className="bg-white scroll-mt-20 w-full overflow-hidden border-t border-mist-200">
      <div className="w-full px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">

          {/* Left: Context */}
          <div className="lg:col-span-5 mb-10 lg:mb-0 lg:sticky lg:top-28">
            <SectionLabel index="06">Assistant de service</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-navy-900">
              Quel est votre besoin ?
            </h2>
            <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-navy-700">
              Répondez à une ou deux questions simples pour identifier le service
              correspondant à votre projet. Cet outil ne remplace pas une visite
              technique, mais il nous aide à comprendre votre demande.
            </p>
          </div>

          {/* Right: Interactive Tool */}
          <div className="lg:col-span-7 bg-mist-50 border border-mist-200 p-6 sm:p-10 min-h-[400px] flex flex-col">

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
              <div className={`h-1.5 flex-1 ${step === 'need' || step === 'result' ? 'bg-water-500' : 'bg-mist-200'}`} />
              <div className={`h-1.5 flex-1 ${step === 'result' ? 'bg-water-500' : 'bg-mist-200'}`} />
            </div>

            {/* Question step */}
            {currentStepData && (
              <AssistantStep
                stepData={currentStepData}
                currentAnswers={answers}
                freeText={freeText}
                onFreeTextChange={setFreeText}
                onSelect={handleSelect}
                onFreeTextSubmit={handleFreeTextSubmit}
                onBack={handleBack}
                error={error}
                isFirstStep={isFirstStep}
              />
            )}

            {/* Result step */}
            {step === 'result' && currentRec && (
              <AssistantResult
                recommendation={currentRec}
                onRestart={handleRestart}
              />
            )}

          </div>
        </div>
      </div>
    </section>
  );
}