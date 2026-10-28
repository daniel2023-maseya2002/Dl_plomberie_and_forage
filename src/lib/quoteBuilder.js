export const PROJECT_TYPES = [
  'Plomberie',
  'Forage d\'eau',
  'Installation de pompe',
  'Système d\'approvisionnement en eau',
  'Autre projet',
];

export function validateStep1(data) {
  if (!data.projectType) return { ok: false, error: 'Merci de sélectionner un type de projet.' };
  return { ok: true };
}

export function validateStep2(data) {
  if (!data.name.trim()) return { ok: false, error: 'Merci de renseigner votre nom.' };
  if (!data.phone.trim()) return { ok: false, error: 'Merci de renseigner votre numéro de téléphone.' };
  if (!data.location.trim()) return { ok: false, error: 'Merci de préciser votre commune ou quartier.' };
  if (!data.description.trim()) return { ok: false, error: 'Merci de décrire brièvement votre besoin.' };
  return { ok: true };
}

export function buildQuoteMessage(data) {
  const lines = [
    'Bonjour DL Plomberie & Forage,',
    '',
    'Je souhaite obtenir des informations ou un devis pour mon projet.',
    '',
    `Nom : ${data.name}`,
    `Téléphone : ${data.phone}`,
    `Localisation : ${data.location}`,
    `Type de projet : ${data.projectType}`,
    `Description : ${data.description}`,
  ];

  if (data.deadline && data.deadline.trim()) {
    lines.push(`Échéance souhaitée : ${data.deadline}`);
  }

  lines.push('', 'Merci de me contacter afin de discuter de mon projet.');
  return lines.join('\n');
}