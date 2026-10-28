export const assistantFlow = {
  need: {
    question: 'Quel est votre besoin principal ?',
    options: [
      { value: 'plomberie', label: 'Problème de plomberie' },
      { value: 'forage',    label: 'Besoin d\'un forage' },
      { value: 'pompe',     label: 'Installation ou problème de pompe' },
      { value: 'systeme',   label: 'Installation d\'un système d\'eau' },
      { value: 'autre',     label: 'Autre besoin / Je ne sais pas' },
    ],
  },
  plomberie: {
    question: 'De quel type d\'intervention s\'agit-il ?',
    options: [
      { value: 'installation', label: 'Une nouvelle installation' },
      { value: 'reparation',   label: 'Une réparation / fuite' },
      { value: 'entretien',    label: 'Un entretien' },
    ],
  },
  forage: {
    question: 'Où en êtes-vous dans votre projet ?',
    options: [
      { value: 'nouveau', label: 'Je démarre un nouveau projet' },
      { value: 'encours', label: 'Le projet est déjà commencé' },
    ],
  },
  pompe: {
    question: 'Que souhaitez-vous faire concernant la pompe ?',
    options: [
      { value: 'installation', label: 'Installer une nouvelle pompe' },
      { value: 'reparation',   label: 'Réparer une pompe existante' },
      { value: 'verification', label: 'Faire vérifier / entretenir' },
    ],
  },
  systeme: {
    question: 'Quel est votre objectif ?',
    options: [
      { value: 'reservoir', label: 'Installer un réservoir d\'eau' },
      { value: 'reseau',    label: 'Créer un réseau de distribution' },
    ],
  },
  autre: {
    question: 'Décrivez votre projet en quelques mots.',
    isFreeText: true,
  },
};

// The final recommendations based on the combination of answers
export const recommendations = {
  // Plomberie
  'plomberie-installation': {
    title: 'Installation de plomberie',
    text: 'Pour une nouvelle installation, nous étudions vos plans ou réalisons un relevé sur site afin de dimensionner correctement le réseau d\'eau et d\'évacuation.',
    needs: ['Le plan du bâtiment (si disponible)', 'Le nombre de points d\'eau', 'La date souhaitée'],
    waMessage: 'Bonjour, je souhaite un devis pour une nouvelle installation de plomberie.',
  },
  'plomberie-reparation': {
    title: 'Réparation et dépannage',
    text: 'Nous intervenons pour rechercher l\'origine d\'une fuite ou réparer une canalisation défectueuse. Notre priorité est de sécuriser l\'installation.',
    needs: ['La localisation de la fuite', 'L\'état général de l\'installation', 'Si l\'eau est coupée'],
    waMessage: 'Bonjour, j\'ai un problème de plomberie (fuite / réparation) et je souhaite une intervention.',
  },
  'plomberie-entretien': {
    title: 'Entretien préventif',
    text: 'Un entretien régulier permet d\'éviter les pannes et de prolonger la durée de vie de vos installations sanitaires.',
    needs: ['Le type d\'installation', 'La dernière date d\'entretien'],
    waMessage: 'Bonjour, je souhaite planifier un entretien de mes installations de plomberie.',
  },
  
  // Forage
  'forage-nouveau': {
    title: 'Nouveau projet de forage',
    text: 'Nous réalisons l\'étude du terrain, le forage et l\'installation. Chaque projet commence par une évaluation de la zone pour déterminer la profondeur nécessaire.',
    needs: ['La localisation exacte', 'L\'usage prévu (maison, école, agriculture)', 'Vos besoins en eau quotidiens'],
    waMessage: 'Bonjour, je souhaite démarrer un nouveau projet de forage. J\'aimerais une étude.',
  },
  'forage-encours': {
    title: 'Reprise de forage',
    text: 'Nous pouvons intervenir sur un forage existant ou un chantier déjà commencé, pour vous aider à le finaliser ou corriger un problème technique.',
    needs: ['L\'état actuel du forage', 'Les difficultés rencontrées'],
    waMessage: 'Bonjour, j\'ai un projet de forage en cours et j\'aurais besoin de votre expertise.',
  },

  // Pompe
  'pompe-installation': {
    title: 'Installation de pompe',
    text: 'Nous sélectionnons et installons la pompe adaptée à votre besoin en eau et à la profondeur de votre forage ou réservoir.',
    needs: ['La profondeur du forage/réservoir', 'Le débit souhaité'],
    waMessage: 'Bonjour, je souhaite installer une nouvelle pompe à eau.',
  },
  'pompe-reparation': {
    title: 'Réparation de pompe',
    text: 'Diagnostic et réparation de pompes défectueuses ou qui ne fournissent plus le débit attendu.',
    needs: ['Le symptôme exact (bruit, arrêt, fuite)', 'La marque/modèle si possible'],
    waMessage: 'Bonjour, ma pompe à eau présente un problème et j\'aurais besoin d\'une réparation.',
  },
  'pompe-verification': {
    title: 'Entretien de pompe',
    text: 'Vérification complète du système de pompage pour prévenir les pannes et optimiser les performances.',
    needs: ['La date de mise en service', 'Le dernier entretien'],
    waMessage: 'Bonjour, je souhaite faire vérifier ou entretenir ma pompe à eau.',
  },

  // Système
  'systeme-reservoir': {
    title: 'Installation de réservoir',
    text: 'Installation de réservoirs et de surpresseurs pour assurer une alimentation en eau régulière et suffisante.',
    needs: ['Le volume souhaité', 'L\'emplacement prévu'],
    waMessage: 'Bonjour, je souhaite installer un réservoir d\'eau et un système de surpression.',
  },
  'systeme-reseau': {
    title: 'Réseau de distribution',
    text: 'Conception et pose de réseaux pour distribuer l\'eau dans plusieurs pièces ou bâtiments.',
    needs: ['Le nombre de points à alimenter', 'Le plan approximatif'],
    waMessage: 'Bonjour, je souhaite créer un réseau de distribution d\'eau pour mon bâtiment.',
  },

  // Autre
  'autre': {
    title: 'Demande spécifique',
    text: 'Votre besoin est spécifique. Décrivez-le nous sur WhatsApp et nous ferons de notre mieux pour vous orienter vers la bonne solution.',
    needs: ['Une description de votre projet'],
    waMessage: 'Bonjour, je souhaite discuter d\'un projet d\'eau spécifique avec vous.',
  },
};