// src/lib/projects.js
//
// Schema (v2):
//   id, slug, title, category, commune, area, date,
//   cover, description, longDescription,
//   photos[], videos[], audio[],
//   timeline { before, during, after } | null,
//   members[], featured, aspect
//
// Backward compatibility:
//   `image`, `type`, `location` are still readable by existing
//   ProjectTile / ProjectCard / FeatureProject — see mapForLegacyCard().

// ── Media imports ─────────────────────────────────────────────────────
import p01Img10 from '../assets/p01Img10.jpeg';
import p01Img11 from '../assets/p01Img11.jpeg';
import p01Img12 from '../assets/p01Img12.jpeg';
import p01Img13 from '../assets/p01Img13.jpeg';
import p01Img14 from '../assets/p01Img14.jpeg';
import p01Img2 from '../assets/p01Img2.mp4';
import p01Img3 from '../assets/p01Img3.jpeg';
import p01Img15 from '../assets/p01Img3.mp4';
import p01Img4 from '../assets/p01Img4.jpeg';
// import p01Img16 from '../assets/p01Img4.mp4';
import p01Img5 from '../assets/p01Img5.jpeg';
import p01Img17 from '../assets/p01Img5.mp4';
import p01Img6 from '../assets/p01Img6.jpeg';
import p01Img18 from '../assets/p01Img6.mp4';
import p01Img7 from '../assets/p01Img7.jpeg';
import p01Img19 from '../assets/p01Img7.mp4';
import p01Img8 from '../assets/p01Img8.jpeg';
import p01Img20 from '../assets/p01Img8.mp4';
import p01Img9 from '../assets/p01Img9.jpeg';
import p02 from '../assets/projects/projet-02.jpg';
import p03 from '../assets/projects/projet-03.jpg';
import p04Vid from '../assets/projects/projet-04.mp4';
import p05 from '../assets/projects/projet-05.jpg';
import p06 from '../assets/projects/projet-06.jpg';
import p07 from '../assets/projects/projet-07.jpg';
import p08 from '../assets/projects/projet-08.jpg';
import p09Vid from '../assets/projects/projet-09.mp4';
import p10 from '../assets/projects/projet-10.png';
import p11 from '../assets/projects/projet-11.jpg';
import p12Aud from '../assets/projects/projet-12.mp3';
import p13 from '../assets/projects/projet-13.jpg';
import p14 from '../assets/projects/projet-14.jpg';
import p15Vid from '../assets/projects/projet-15.mp4';
import p16 from '../assets/projects/projet-16.jpg';
import p17Vid from '../assets/projects/projet-17.mp4';
import p18 from '../assets/projects/projet-18.jpg';

export const projects = [
  {
    id: 'p01',
    slug: 'plomberie-fifa-nsele',
    title: 'Plomberie Residentielle-Premier-Porte-Fifa',
    category: 'Plomberie',
    commune: "N'sele",
    area: 'Fifa Premier porte',
    date: '2026',
    cover: p01Img2,
    description: "Étude de site, plomberie et installation des sanitaires, toilette, et chauf eau.",
    longDescription:
      "Ce projet a débuté par une étude du terrain afin de déterminer le devis, apres faire les schemas, l'installation d'un citerne, la connexion entre pompe d'eau de forage et citerne, connexion d'eau dans maison, et installation et depot des sanitaire.",
   photos: [
    { src: p01Img3, alt: 'Installation toilette' },
    { src: p01Img4, alt: 'Vue du chantier' },
    { src: p01Img5, alt: 'Plomberie' },
    { src: p01Img6, alt: 'Connexion plomberie' },
    { src: p01Img7, alt: 'Installation citerne' },
    { src: p01Img8, alt: 'Fixation lavabo' },
    { src: p01Img9, alt: 'Installation citerne' },
    { src: p01Img10, alt: 'Schéma d\'eau' },
    { src: p01Img11, alt: 'Installation savonnière' },
    { src: p01Img12, alt: 'Installation savonnière' },
    { src: p01Img13, alt: 'Pose lavabo' },
    { src: p01Img14, alt: 'Installation pompe' },
  ],
  videos: [
    { src: p01Img2, label: 'Vue du chantier' },
    { src: p01Img15, label: 'Installation citerne' },
    { src: p01Img17, label: 'Pose savonnière' },
    { src: p01Img18, label: 'Installation pompe' },
    { src: p01Img19, label: 'Installation porte-essuie' },
    { src: p01Img20, label: 'Vue générale' },
  ],
    audio: [],
    timeline: null,
    members: ['m01', 'm02'],
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'p02',
    slug: 'renovation-salle-de-bain-nsele',
    title: 'Rénovation salle de bain',
    category: 'Sanitaire',
    commune: "N'Sele",
    area: "N'Sele",
    date: '2024',
    cover: p02,
    description: 'Mise aux normes complète : alimentation, évacuation, pose des équipements.',
    longDescription:
      "Rénovation complète d'une salle de bain existante : reprise des réseaux d'alimentation et d'évacuation, puis pose des équipements sanitaires.",
    photos: [{ src: p02, alt: 'Salle de bain rénovée' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 'p03',
    slug: 'reseau-principal-immeuble-kinshasa',
    title: 'Réseau principal immeuble',
    category: 'Plomberie',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p03,
    description: 'Pose de canalisations et raccordement au réseau existant.',
    longDescription:
      "Pose d'un réseau principal de canalisations pour un immeuble, avec raccordement au réseau existant. Travaux réalisés en coordination avec les autres corps de métier du chantier.",
    photos: [{ src: p03, alt: 'Réseau principal de canalisations' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: true,
    aspect: 'square',
  },
  {
    id: 'p04',
    slug: 'test-debit-pompe-nsele',
    title: 'Test de débit — pompe',
    category: 'Forage',
    commune: "N'Sele",
    area: "N'Sele",
    date: '2024',
    cover: p04Vid,
    description: "Démonstration du débit d'eau après mise en service.",
    longDescription:
      "Suite à l'installation d'une pompe, un test de débit a été réalisé pour vérifier la performance du système avant la mise en service finale.",
    photos: [],
    videos: [{ src: p04Vid, label: 'Test de débit de la pompe' }],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'p05',
    slug: 'installation-cuisine-mikonga',
    title: 'Installation cuisine',
    category: 'Sanitaire',
    commune: 'Mikonga 2',
    area: "N'Sele",
    date: '2024',
    cover: p05,
    description: 'Alimentation eau froide / chaude et évacuation pour cuisine complète.',
    longDescription:
      "Installation complète d'une cuisine : alimentation en eau froide et chaude, évacuation, raccordement à l'évier et à l'électroménager.",
    photos: [{ src: p05, alt: 'Installation de cuisine' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: true,
    aspect: 'square',
  },
  {
    id: 'p06',
    slug: 'canalisations-exterieures-kinshasa',
    title: 'Canalisations extérieures',
    category: 'Plomberie',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p06,
    description: 'Travaux de terrassement et raccordement.',
    longDescription:
      "Travaux de terrassement puis pose de canalisations extérieures pour l'évacuation des eaux.",
    photos: [{ src: p06, alt: 'Travaux de canalisations extérieures' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 'p07',
    slug: 'forage-ecole-nsele',
    title: 'Forage école primaire',
    category: 'Forage',
    commune: "N'Sele",
    area: "N'Sele",
    date: '2024',
    cover: p07,
    description: "Forage et pompe pour alimentation en eau d'une école.",
    longDescription:
      "Réalisation d'un forage dédié à l'alimentation en eau d'une école primaire, avec installation d'une pompe et d'un système de distribution.",
    photos: [{ src: p07, alt: 'Forage pour école primaire' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p08',
    slug: 'depannage-fuite-kinshasa',
    title: 'Dépannage fuite urgente',
    category: 'Plomberie',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p08,
    description: 'Recherche de fuite et réparation sur canalisation enterrée.',
    longDescription:
      "Intervention d'urgence pour localiser et réparer une fuite sur canalisation enterrée. L'intervention a permis d'éviter des dégâts supplémentaires.",
    photos: [{ src: p08, alt: 'Réparation de fuite enterrée' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p09',
    slug: 'chantier-forage-video-mikonga',
    title: 'Chantier forage — vidéo',
    category: 'Forage',
    commune: 'Mikonga 2',
    area: "N'Sele",
    date: '2024',
    cover: p09Vid,
    description: 'Séquence vidéo du chantier de forage.',
    longDescription:
      "Séquence vidéo documentant le déroulement d'un chantier de forage.",
    photos: [],
    videos: [{ src: p09Vid, label: 'Déroulement du chantier' }],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 'p10',
    slug: 'forage-agricole-kinshasa',
    title: 'Forage exploitation agricole',
    category: 'Forage',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p10,
    description: 'Forage profond pour irrigation et usage agricole.',
    longDescription:
      "Réalisation d'un forage profond destiné à l'irrigation et à l'usage agricole.",
    photos: [{ src: p10, alt: 'Forage agricole' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p11',
    slug: 'rehabilitation-reseau-nsele',
    title: "Réhabilitation réseau d'eau",
    category: 'Plomberie',
    commune: "N'Sele",
    area: "N'Sele",
    date: '2024',
    cover: p11,
    description: 'Remplacement de tronçons défectueux et remise en service.',
    longDescription:
      "Réhabilitation d'un réseau d'eau existant : identification des tronçons défectueux, remplacement et remise en service.",
    photos: [{ src: p11, alt: "Réhabilitation d'un réseau d'eau" }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p12',
    slug: 'temoignage-client-audio-kinshasa',
    title: 'Témoignage client — audio',
    category: 'Sanitaire',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: null,
    description: "Message audio d'un client après intervention.",
    longDescription:
      "Enregistrement audio d'un client après la fin des travaux.",
    photos: [],
    videos: [],
    audio: [{ src: p12Aud, label: 'Témoignage client' }],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 'p13',
    slug: 'pose-compteurs-kinshasa',
    title: 'Pose de compteurs',
    category: 'Plomberie',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p13,
    description: 'Installation et raccordement de compteurs divisionnaires.',
    longDescription:
      'Installation et raccordement de compteurs divisionnaires pour un immeuble.',
    photos: [{ src: p13, alt: 'Installation de compteurs' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p14',
    slug: 'salle-de-bain-immeuble-nsele',
    title: 'Salle de bain — immeuble',
    category: 'Sanitaire',
    commune: "N'Sele",
    area: "N'Sele",
    date: '2024',
    cover: p14,
    description: "Équipement complet d'une salle de bain moderne.",
    longDescription:
      "Équipement complet d'une salle de bain dans un immeuble : pose des sanitaires, robinetterie et raccordements.",
    photos: [{ src: p14, alt: 'Salle de bain équipée' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p15',
    slug: 'installation-pompe-video-nsele',
    title: 'Installation pompe — vidéo',
    category: 'Forage',
    commune: "N'Sele",
    area: "N'Sele",
    date: '2024',
    cover: p15Vid,
    description: "Mise en service d'une pompe immergée.",
    longDescription:
      "Vidéo de mise en service d'une pompe immergée après installation.",
    photos: [],
    videos: [{ src: p15Vid, label: "Mise en service d'une pompe" }],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p16',
    slug: 'travaux-canalisation-kinshasa',
    title: 'Travaux de canalisation',
    category: 'Plomberie',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p16,
    description: 'Pose de canalisations pour extension de réseau.',
    longDescription:
      "Pose de canalisations pour étendre un réseau existant vers une nouvelle zone.",
    photos: [{ src: p16, alt: 'Travaux de canalisation' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 'p17',
    slug: 'forage-video-technique-kinshasa',
    title: 'Forage — vidéo technique',
    category: 'Forage',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p17Vid,
    description: 'Vue technique du processus de forage.',
    longDescription:
      'Vue technique du processus de forage.',
    photos: [],
    videos: [{ src: p17Vid, label: 'Processus de forage' }],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p18',
    slug: 'reseau-sanitaire-ecole-kinshasa',
    title: 'Réseau sanitaire — école',
    category: 'Sanitaire',
    commune: 'Kinshasa',
    area: 'Kinshasa',
    date: '2024',
    cover: p18,
    description: 'Installation sanitaire complète pour établissement scolaire.',
    longDescription:
      "Installation sanitaire complète pour un établissement scolaire : alimentation, évacuation et pose des équipements.",
    photos: [{ src: p18, alt: 'Réseau sanitaire pour école' }],
    videos: [],
    audio: [],
    timeline: null,
    members: ['m01'],
    featured: false,
    aspect: 'landscape',
  },
];

// ── Backward-compat helper ────────────────────────────────────────────
// Maps a v2 project to the shape expected by ProjectTile / ProjectCard /
// FeatureProject (which read `image`, `type`, `location`, `mediaType`,
// `mediaUrl`).
export function mapForLegacyCard(project) {
  const legacyImage =
    project.cover ||
    project.photos?.[0]?.src ||
    project.videos?.[0]?.src ||
    null;

  return {
    ...project,
    image: legacyImage,
    type: project.category,
    location: project.commune,
    mediaType:
      project.videos?.length > 0 ? 'video'
      : project.audio?.length > 0 ? 'audio'
      : 'image',
    mediaUrl:
      project.videos?.[0]?.src ||
      project.audio?.[0]?.src ||
      null,
  };
}

// ── Derived lists ─────────────────────────────────────────────────────
export const featuredProjects = projects
  .filter((p) => p.featured)
  .map(mapForLegacyCard);

export const projectCategories = ['Tout', 'Plomberie', 'Forage', 'Sanitaire'];

export const projectBySlug = (slug) =>
  projects.find((p) => p.slug === slug) || null;