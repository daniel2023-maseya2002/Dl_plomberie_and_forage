export const SITE = {
  name: 'DL Plomberie & Forage',
  shortName: 'DL Plomberie',
  zone: "N'Sele / Mikonga 2",
  city: 'Kinshasa',
  country: 'RDC',

  phone: '+243 858 569 375',
  phoneRaw: '243858569375',
  whatsapp: '243858569375',

  instagram: { handle: '@maku_delivrance', url: 'https://instagram.com/maku_delivrance' },
  tiktok:    { handle: 'Ir Delivrance Maku', url: 'https://tiktok.com/@maku_delivrance' },

  founder: {
    displayName: 'Ir Delivrance Maku',
    fullName: 'Delivrance Maku Lukalakiese',
    title: 'Ingénieur et fondateur',
    training: 'Certificat de plomberie — INPP (Institut National de Préparation Professionnelle)',
    experience: 'Plus de 5 ans',
  },
};

export const waLink = (message = '') =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:+${SITE.phoneRaw}`;