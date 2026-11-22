// ============================================================
// REAL WEDDING CONFIGURATION FILE
// Balaraman & Kaviya Wedding Invitation
// ============================================================

export const wedding = {
  // ── COUPLE ──────────────────────────────────────────────
  groomName: "T. Balaraman",
  groomDegree: "B.Com.",
  groomOccupation: "",
  groomNameTamil: "த. பலராமன்",
  
  brideName: "K. Kaviya",
  brideDegree: "DGDA",
  brideNameTamil: "க. காவியா",

  groomParents: "P. Thangavel – Manjula",
  groomParentsTamil: "ப. தங்கவேல் – மஞ்சுளா",
  groomNative: "",
  groomNativeTamil: "",
  groomFamily: "S/o. P. Thangavel – Manjula",

  brideParents: "K. Kannan – Prabhavathi",
  brideParentsTamil: "க. கண்ணன் – பிரபாவதி",
  brideNative: "",
  brideNativeTamil: "",
  brideFamily: "D/o. K. Kannan – Prabhavathi",

  compliments: "With Best Compliments From Family, Friends & Relatives",
  complimentsTamil: "நல்வாழ்த்துக்களுடன்: குடும்பத்தினர், நண்பர்கள் மற்றும் உறவினர்கள்",

  // ── WEDDING DATE & TIME ──────────────────────────────────
  // Sunday, 29 November 2026 (04:30 AM IST)
  weddingDate: "2026-11-29T04:30:00+05:30",
  timeZone: 'Asia/Kolkata',
  muhurthamTime: "04:30 AM – 06:00 AM IST",
  muhurthamDate: "November 29, 2026 (Sunday)",
  receptionTime: "06:00 PM – 08:00 PM",
  receptionDate: "November 29, 2026 (Sunday)",

  // ── EVENTS ───────────────────────────────────────────────
  events: [
    {
      id: 'wedding',
      title: 'Wedding Muhurtham',
      titleTamil: 'திருமண முகூர்த்தம்',
      date: 'Sunday, 29th November 2026',
      time: '04:30 AM - 06:00 AM',
      venue: 'Om Sri Bhavani Amman Temple',
      address: 'Sanidhi, T. Kenipattu Village',
      dressCode: 'Traditional Silk Saree / Veshti & Shirt',
      icon: 'star',
      mapUrl: 'https://maps.app.goo.gl/V4LY4qBjrNb8VWAq9',
      enabled: true,
    },
    {
      id: 'reception',
      title: 'Wedding Reception',
      titleTamil: 'வரவேற்பு விழா',
      date: 'Sunday, 29th November 2026',
      time: '06:00 PM - 08:00 PM',
      venue: 'JAS Thirumana Mandapam',
      address: 'Rettanai Road, Kutteripattu Tamil Nadu',
      dressCode: 'Festive / Traditional Silk',
      icon: 'sparkle',
      mapUrl: 'https://maps.app.goo.gl/wv47jZEKPy6D14WdA',
      enabled: true,
    },
  ],

  // ── VENUE (Ceremony & Reception) ──────────────────────────
  venueName: "Om Sri Bhavani Amman Temple & JAS Thirumana Mandapam",
  venueAddress: "T. Kenipattu Village / Rettanai Road, Tamil Nadu",
  muhurthamMapUrl: "https://maps.app.goo.gl/V4LY4qBjrNb8VWAq9",
  receptionMapUrl: "https://maps.app.goo.gl/wv47jZEKPy6D14WdA",

  // ── OUR STORY ────────────────────────────────────────────
  story: [
    { chapter: 'With Divine Blessings', text: 'With the blessings of Om Sri Bhavani Amman and our elders, we begin a lifetime together.' },
    { chapter: 'Two Families, One Heart', text: 'With great joy and happiness, our families invite you to celebrate this beautiful union.' },
    { chapter: 'Forever Begins', text: 'Your gracious presence and blessings will make this occasion truly memorable.' },
  ],

  // ── COUPLE PHOTOS ────────────────────────────────────────
  couplePhotos: {},

  // ── AUDIO ────────────────────────────────────────────────
  backgroundMusic: '/assets/audio1.mp3', // User-provided wedding soundtrack

  // ── THEME ────────────────────────────────────────────────
  theme: {
    primaryGold: '#D4A017',
    deepGold: '#B8860B',
    lightGold: '#FFD700',
    ivory: '#FFFFF0',
    champagne: '#F7E7CE',
    maroon: '#800020',
    emerald: '#006400',
    palaceBg: '#0A0505',
  },

  // ── SOCIAL / SHARE ───────────────────────────────────────
  shareTitle: "Wedding Invitation: T. Balaraman ♥ K. Kaviya",
  shareText: "With great joy and happiness, we invite you and your family to celebrate T. Balaraman, B.Com. (son of P. Thangavel - Manjula) & K. Kaviya, DGDA (daughter of K. Kannan - Prabhavathi).\n\nSunday, 29 November 2026\nWedding: 4:30 AM - 6:00 AM\nOm Sri Bhavani Amman Temple, Sanidhi, T. Kenipattu Village.\nLocation: https://maps.app.goo.gl/V4LY4qBjrNb8VWAq9\n\nReception: 6:00 PM - 8:00 PM\nJAS Thirumana Mandapam, Rettanai Road.\nLocation: https://maps.app.goo.gl/wv47jZEKPy6D14WdA\n\nYour gracious presence and blessings will make this occasion truly memorable.\nWith best compliments from Family, Friends & Relatives.",
  // Versioned so WhatsApp refreshes the link preview after metadata changes.
  shareUrl: "",

  // ── ICS CALENDAR ─────────────────────────────────────────
  icsEvent: {
    title: 'T. Balaraman & K. Kaviya Wedding',
    description: 'Wedding: 4:30 AM - 6:00 AM at Om Sri Bhavani Amman Temple. Reception: 6:00 PM - 8:00 PM at JAS Thirumana Mandapam, Rettanai Road.',
    location: 'Om Sri Bhavani Amman Temple, Sanidhi, T. Kenipattu Village',
    startDate: '20261128T230000Z',
    endDate: '20261129T003000Z',
  },
};

export default wedding;
