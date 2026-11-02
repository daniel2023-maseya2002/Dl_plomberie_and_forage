import founderImg from '../assets/founder.jpeg';
// Import placeholder photos for the team members (replace with real ones later)
import team1Img from '../assets/client-1.jpeg';
import team2Img from '../assets/client-2.jpeg';
import team3Img from '../assets/client-3.jpeg';

export const members = [
  {
    id: 'm01',
    slug: 'delivrance-maku',
    fullName: 'Delivrance Maku Lukalakiese',
    displayName: 'Ir Delivrance Maku',
    role: 'Ingénieur et fondateur',
    photo: founderImg,
    intro:
      "Fondateur de DL Plomberie & Forage, Ingénieur de formation, il supervise personnellement les projets de forage et de plomberie de l'entreprise.",
    qualifications: [
      'Certificat de plomberie — INPP (Institut National de Préparation Professionnelle)',
      'Plus de 5 ans d\'expérience',
    ],
    specialties: ['Forage', 'Plomberie', 'Installation de pompes'],
    isFounder: true,
  },
  
  // ── PLACEHOLDER TEAM MEMBERS (Replace with real ones) ──
  {
    id: 'm02',
    slug: 'lenox-nanitelamio',
    fullName: 'Lenox Nanitelamio',
    displayName: 'Lenox N.',
    role: 'Maitre Assistant Plomberie & Sanitaire',
    photo: team1Img,
    intro:
      "Supervise les installations et les dépannages sur le terrain. Il veille au respect des normes sanitaires et accompagne les techniciens juniors sur les chantiers complexes.",
    qualifications: [
      'Formation technique en plomberie',
      '2 ans d\'expérience sur chantier',
    ],
    specialties: ['Plomberie', 'Sanitaire'],
    isFounder: false,
  },
  {
    id: 'm03',
    slug: 'marie-lukusa',
    fullName: 'Marie Lukusa',
    displayName: 'Marie L.',
    role: 'Technicien forage',
    photo: team2Img,
    intro:
      "Technicien spécialisé dans la réalisation de forages et l'installation des équipements de pompage.",
    qualifications: [
      'Certificat en Forage',
      '3 ans d\'expérience',
    ],
    specialties: ['Forage', 'Pomppe'],
    isFounder: false,
  },
  {
    id: 'm04',
    slug: 'patrick-mbuyi',
    fullName: 'Patrick Mbuyi',
    displayName: 'Patrick M.',
    role: 'Technicien sanitaire',
    photo: team3Img,
    intro:
      "Technicien spécialisé dans l'installation et l'entretien des systèmes sanitaires.",
    qualifications: [
      'Formation en installations sanitaires',
      '2 ans d\'expérience',
    ],
    specialties: ['Sanitaire', 'Installation'],
    isFounder: false,
  },
];

export const founder = members.find((m) => m.isFounder);
export const memberById = (id) => members.find((m) => m.id === id);