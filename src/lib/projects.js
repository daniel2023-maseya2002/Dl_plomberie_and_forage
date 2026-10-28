// src/lib/projects.js

// ── 18 unique media imports ───────────────────────────────────────────────
import p01 from '../assets/projects/projet-01.jpg';
import p02 from '../assets/projects/projet-02.jpg';
import p03 from '../assets/projects/projet-03.jpg'; // Renamed from images (1).jpg
// import p04 from '../assets/projects/projet-04.jpg'; // REMOVED (Duplicate)
import p04Video from '../assets/projects/projet-04.mp4'; // 🎥 Video 1
import p05 from '../assets/projects/projet-05.jpg';
import p06 from '../assets/projects/projet-06.jpg';
import p07 from '../assets/projects/projet-07.jpg';
import p08 from '../assets/projects/projet-08.jpg';
import p09Video from '../assets/projects/projet-09.mp4'; // 🎥 Video 2
import p10 from '../assets/projects/projet-10.png'; // Notice .png
import p11 from '../assets/projects/projet-11.jpg';
import p12Music from '../assets/projects/projet-12.mp3'; // 🎵 Music/Audio
import p13 from '../assets/projects/projet-13.jpg';
import p14 from '../assets/projects/projet-14.jpg';
import p15Video from '../assets/projects/projet-15.mp4'; // 🎥 Video 3
import p16 from '../assets/projects/projet-16.jpg';
import p17Video from '../assets/projects/projet-17.mp4'; // 🎥 Video 4
import p18 from '../assets/projects/projet-18.jpg';

export const projects = [
  // ── FEATURED (Home — 1 feature + 5 supporting) ─────────────────────────
  {
    id: 'p01',
    title: 'Forage résidentiel Mikonga',
    type: 'Forage',
    location: 'Mikonga 2',
    description: "Étude de site, forage et installation d'un système de pompage pour une résidence.",
    image: p01,
    mediaType: 'image',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'p02',
    title: 'Rénovation salle de bain',
    type: 'Sanitaire',
    location: "N'Sele",
    description: 'Mise aux normes complète : alimentation, évacuation, pose des équipements.',
    image: p02,
    mediaType: 'image',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 'p03',
    title: 'Réseau principal immeuble',
    type: 'Plomberie',
    location: 'Kinshasa',
    description: 'Pose de canalisations et raccordement au réseau existant.',
    image: p03,
    mediaType: 'image',
    featured: true,
    aspect: 'square',
  },
  {
    id: 'p04',
    title: 'Test de débit — pompe',
    type: 'Forage',
    location: "N'Sele",
    description: "Démonstration du débit d'eau après mise en service.",
    image: p04Video, // Use the video as the thumbnail image
    mediaType: 'video',
    mediaUrl: p04Video,
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'p05',
    title: 'Installation cuisine',
    type: 'Sanitaire',
    location: 'Mikonga 2',
    description: 'Alimentation eau froide / chaude et évacuation pour cuisine complète.',
    image: p05,
    mediaType: 'image',
    featured: true,
    aspect: 'square',
  },
  {
    id: 'p06',
    title: 'Canalisations extérieures',
    type: 'Plomberie',
    location: 'Kinshasa',
    description: 'Travaux de terrassement et raccordement.',
    image: p06,
    mediaType: 'image',
    featured: true,
    aspect: 'portrait',
  },

  // ── ARCHIVE ONLY (12 additional unique items) ──────────────────────────
  {
    id: 'p07',
    title: 'Forage école primaire',
    type: 'Forage',
    location: "N'Sele",
    description: 'Forage et pompe pour alimentation en eau d\'une école.',
    image: p07,
    mediaType: 'image',
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p08',
    title: 'Dépannage fuite urgente',
    type: 'Plomberie',
    location: 'Kinshasa',
    description: 'Recherche de fuite et réparation sur canalisation enterrée.',
    image: p08,
    mediaType: 'image',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p09',
    title: 'Chantier forage — vidéo',
    type: 'Forage',
    location: 'Mikonga 2',
    description: 'Séquence vidéo du chantier de forage.',
    image: p09Video, // Use video as thumbnail
    mediaType: 'video',
    mediaUrl: p09Video,
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 'p10',
    title: 'Forage exploitation agricole',
    type: 'Forage',
    location: 'Kinshasa',
    description: 'Forage profond pour irrigation et usage agricole.',
    image: p10,
    mediaType: 'image',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p11',
    title: 'Réhabilitation réseau d\'eau',
    type: 'Plomberie',
    location: "N'Sele",
    description: 'Remplacement de tronçons défectueux et remise en service.',
    image: p11,
    mediaType: 'image',
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p12',
    title: 'Témoignage client — audio',
    type: 'Sanitaire',
    location: 'Kinshasa',
    description: 'Message audio d\'un client après intervention.',
    image: null, // No photo for this one
    mediaType: 'audio',
    mediaUrl: p12Music,
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 'p13',
    title: 'Pose de compteurs',
    type: 'Plomberie',
    location: 'Kinshasa',
    description: 'Installation et raccordement de compteurs divisionnaires.',
    image: p13,
    mediaType: 'image',
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p14',
    title: 'Salle de bain — immeuble',
    type: 'Sanitaire',
    location: "N'Sele",
    description: 'Équipement complet d\'une salle de bain moderne.',
    image: p14,
    mediaType: 'image',
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p15',
    title: 'Installation pompe — vidéo',
    type: 'Forage',
    location: "N'Sele",
    description: 'Mise en service d\'une pompe immergée.',
    image: p15Video, // Use video as thumbnail
    mediaType: 'video',
    mediaUrl: p15Video,
    featured: false,
    aspect: 'landscape',
  },
  {
    id: 'p16',
    title: 'Travaux de canalisation',
    type: 'Plomberie',
    location: 'Kinshasa',
    description: 'Pose de canalisations pour extension de réseau.',
    image: p16,
    mediaType: 'image',
    featured: false,
    aspect: 'portrait',
  },
  {
    id: 'p17',
    title: 'Forage — vidéo technique',
    type: 'Forage',
    location: 'Kinshasa',
    description: 'Vue technique du processus de forage.',
    image: p17Video, // Use video as thumbnail
    mediaType: 'video',
    mediaUrl: p17Video,
    featured: false,
    aspect: 'square',
  },
  {
    id: 'p18',
    title: 'Réseau sanitaire — école',
    type: 'Sanitaire',
    location: 'Kinshasa',
    description: 'Installation sanitaire complète pour établissement scolaire.',
    image: p18,
    mediaType: 'image',
    featured: false,
    aspect: 'landscape',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectTypes = ['Tout', 'Plomberie', 'Forage', 'Sanitaire'];