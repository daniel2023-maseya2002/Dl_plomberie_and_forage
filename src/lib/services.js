import imgCanalisations from '../assets/services/canalisations.jpg';
import imgForage from '../assets/services/forage.jpg';
import imgFuites from '../assets/services/fuites.jpg';
import imgInstallation from '../assets/services/installation.jpg';
import imgPompes from '../assets/services/pompes.jpg';
import imgSanitaire from '../assets/services/sanitaire.jpg';

export const services = [
  {
    id: 'installation',
    index: '01',
    title: 'Installation de plomberie',
    short: "Réseaux d'eau et évacuation, du plan à la mise en service.",
    description:
      "Conception et pose de réseaux d'eau froide, d'eau chaude et d'évacuation pour constructions neuves, rénovations et extensions. Nous travaillons à partir des plans sanitaires ou réalisons le relevé sur site.",
    bullets: [
      'Réseaux neufs et remises à neuf',
      'Raccordement sanitaire complet',
      'Pose de sanitaires et robinetterie',
    ],
    image: imgInstallation,
    caption: 'Installation · Kinshasa',
    waMessage: 'Bonjour, je souhaite un devis pour une installation de plomberie.',
  },
  {
    id: 'fuites',
    index: '02',
    title: 'Réparation de fuites et dépannage',
    short: 'Intervention ciblée, diagnostic clair, réparation durable.',
    description:
      "Recherche et réparation de fuites sur canalisations enterrées ou apparentes, sur réseaux d'eau et d'évacuation. Dépannage pour particuliers et commerces.",
    bullets: [
      'Recherche de fuite',
      'Réparation sur canalisation',
      'Remplacement de pièces défectueuses',
    ],
    image: imgFuites,
    caption: 'Dépannage · Mikonga 2',
    waMessage: "Bonjour, j'ai une fuite à réparer, pouvez-vous intervenir ?",
  },
  {
    id: 'canalisations',
    index: '03',
    title: 'Canalisations et réseaux',
    short: 'Pose, raccordement et entretien de canalisations.',
    description:
      "Pose et raccordement de canalisations pour l'adduction d'eau et l'évacuation. Entretien préventif et curatif pour limiter les interruptions de service.",
    bullets: [
      'Pose de canalisations',
      'Raccordement au réseau existant',
      'Entretien et curage',
    ],
    image: imgCanalisations,
    caption: "Canalisations · N'Sele",
    waMessage: 'Bonjour, je souhaite des informations sur les travaux de canalisation.',
  },
  {
    id: 'sanitaire',
    index: '04',
    title: 'Installations sanitaires',
    short: 'Salles de bain, cuisines, blocs sanitaires.',
    description:
      "Installation complète de salles de bain, cuisines et blocs sanitaires : alimentation en eau, évacuation, pose des équipements et raccordement.",
    bullets: [
      'Salles de bain complètes',
      'Cuisines et office',
      'Blocs sanitaires collectifs',
    ],
    image: imgSanitaire,
    caption: 'Sanitaire · Kinshasa',
    waMessage: 'Bonjour, je souhaite un devis pour une installation sanitaire.',
  },
  {
    id: 'forage',
    index: '05',
    title: 'Forage et étude de site',
    short: 'Étude préalable, forage, mise en service.',
    description:
      "Étude et réalisation de forages pour l'approvisionnement en eau. Nous intervenons pour particuliers, entreprises, écoles, hôtels et exploitations agricoles.",
    bullets: [
      'Étude de site et implantation',
      'Réalisation du forage',
      'Mise en service et essais',
    ],
    image: imgForage,
    caption: 'Forage · Kinshasa',
    waMessage: 'Bonjour, je souhaite une étude pour un forage.',
  },
  {
    id: 'pompes',
    index: '06',
    title: 'Pompes et approvisionnement en eau',
    short: 'Pompes, surpresseurs, réservoirs, maintenance.',
    description:
      "Installation de pompes, surpresseurs et systèmes de stockage pour garantir une alimentation en eau régulière. Maintenance et dépannage.",
    bullets: [
      'Installation de pompes',
      'Systèmes de surpression',
      'Maintenance des installations',
    ],
    image: imgPompes,
    caption: 'Pompage · Mikonga 2',
    waMessage: "Bonjour, je souhaite installer une pompe / un système d'eau.",
  },
];