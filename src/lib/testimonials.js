// src/lib/testimonials.js
//
// Only add REAL testimonials here.
// Each entry requires a real client (name or initials + neighbourhood),
// a real quote, and a real date. Do not fabricate.

export const testimonials = [
  {
    id: 't01',
    slug: 'forage-mikonga-temoignage',
    clientName: 'Mme Kabeya',
    clientInitials: 'MK',
    neighbourhood: 'Mikonga 2',
    service: 'Forage',
    date: 'Octobre 2024',
    title: '« Le forage a changé notre quotidien »',
    excerpt:
      "Avant, nous devions marcher pour puiser de l'eau. Aujourd'hui, le robinet coule dans la cour. L'équipe a été sérieuse du début à la fin.",
    body: [
      "Nous avions un problème d'approvisionnement en eau depuis plusieurs années. Après avoir contacté DL Plomberie & Forage, une étude a été réalisée et le forage a été installé en quelques jours.",
      "Ce qui nous a marqués, c'est la clarté du devis et le fait que l'ingénieur soit présent sur le chantier. Une fois les travaux terminés, ils sont revenus vérifier que tout fonctionnait correctement.",
      "Aujourd'hui, le robinet coule dans la cour. C'est un vrai changement pour la famille.",
    ],
    image: null, // Optional — add a real photo path if you have one
    audio: null, // Optional — path to real audio testimonial
    featured: true,
  },
  {
    id: 't02',
    slug: 'plomberie-nsele-temoignage',
    clientName: 'M. Lukusa',
    clientInitials: 'ML',
    neighbourhood: "N'Sele",
    service: 'Plomberie',
    date: 'Septembre 2024',
    title: '« Une fuite réparée en quelques heures »',
    excerpt:
      "Un dimanche matin, une canalisation a cédé. DL Plomberie & Forage a répondu à mon appel et une équipe était là dans l'après-midi.",
    body: [
      "La fuite menaçait d'endommager les murs de la maison. J'ai appelé le numéro indiqué sur le site, et un technicien m'a rappelé dans l'heure pour comprendre la situation.",
      "L'intervention a été propre. Ils ont localisé la fuite sans démolir inutilement, puis ont remplacé le tronçon endommagé.",
      "Le lendemain, j'ai reçu un message pour vérifier que tout allait bien. C'est le genre de suivi qu'on n'oublie pas.",
    ],
    image: null,
    audio: null,
    featured: true,
  },
  {
    id: 't03',
    slug: 'sanitaire-ecole-temoignage',
    clientName: 'Direction école',
    clientInitials: 'DE',
    neighbourhood: 'Kinshasa',
    service: 'Sanitaire',
    date: 'Juillet 2024',
    title: '« Des sanitaires adaptés à nos élèves »',
    excerpt:
      "Nous avions besoin d'installer un bloc sanitaire complet pour les élèves. Le travail a été livré dans les délais.",
    body: [
      "Nous cherchions une entreprise capable de comprendre nos contraintes — un budget limité, un chantier pendant les vacances scolaires, et un nombre important d'élèves à desservir.",
      "DL Plomberie & Forage a proposé une solution réaliste, sans promettre l'impossible. Les travaux ont été livrés avant la rentrée.",
      "Les élèves disposent maintenant de sanitaires fonctionnels, ce qui n'était pas le cas depuis longtemps.",
    ],
    image: null,
    audio: null,
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
export const testimonialBySlug = (slug) =>
  testimonials.find((t) => t.slug === slug) || null;