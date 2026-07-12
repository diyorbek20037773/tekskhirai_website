// Markaziy sozlamalar — linklar bir joyda, o'zgartirish oson.

export const LINKS = {
  telegram: 'https://t.me/TekshirAI_uz_bot',
  app: 'https://web-production-f1b9.up.railway.app',
  demoVideoId: 'W4SuE3XCEwM', // youtu.be/W4SuE3XCEwM
  email: 'diyorbek20037377@gmail.com',
}

// Ijtimoiy tarmoqlar (footer "Connect")
export const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/diyorbek-ibragimov-757830338/' },
  { key: 'telegram', label: 'Telegram', url: 'https://t.me/diyorbek_7377' },
  { key: 'channel', label: 'Telegram kanal', url: 'https://t.me/diyorbek_ds_7377' },
  { key: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@DiyorbekIbragimov7377' },
  { key: 'x', label: 'X', url: 'https://x.com/Diyorbek7377' },
  { key: 'email', label: 'Email', url: 'mailto:diyorbek20037377@gmail.com' },
]

// Jamoa — rasmlar public/team/ da
export const TEAM = [
  { name: 'Shohobiddin Najmiddinov', roleKey: 'ceo', photo: '/team/1.jpg' },
  { name: 'Azizbek Ibragimov', roleKey: 'business', photo: '/team/2.jpg' },
  { name: 'Eldor Musayev', roleKey: 'cyber', photo: '/team/3.jpg' },
  { name: 'Diyorbek Ibragimov', roleKey: 'ml', photo: '/team/4.jpg' },
  { name: 'Giyosiddin Ubaydullayev', roleKey: 'fullstack', photo: '/team/5.jpg' },
]

// Jamoa yutuqlari (hakatonlar) — "Do'ppiX jamoasi"
export const ACHIEVEMENTS = [
  {
    key: 'aiHackathon',
    image: '/achievements/ai-hackathon.jpg',
    date: '30.03–03.04.2026',
    place: 'Termiz',
    rank: '1',
    link: null,
  },
  {
    key: 'cybershield',
    image: '/achievements/cybershield.jpg',
    date: '2026',
    place: 'Xalqaro',
    rank: '1',
    link: 'https://youtu.be/XyddedqgFs8',
  },
]

export const TECH = [
  'FastAPI',
  'React 18',
  'Google Gemini 2.5',
  'PostgreSQL',
  'PWA',
  'WebAuthn',
  'Telegram Bot API',
  'three.js',
  'MediaPipe',
  'Tailwind CSS',
]

// Fan kartalar (Imkoniyatlar bo'limida rang aksentlari uchun)
export const SUBJECT_CHIPS = [
  { label: 'Matematika', emoji: '📐', color: 'primary' },
  { label: 'Fizika', emoji: '⚛️', color: 'accent' },
  { label: 'Kimyo', emoji: '🧪', color: 'rose' },
  { label: 'Biologiya', emoji: '🧬', color: 'success' },
  { label: 'Ona tili', emoji: '📖', color: 'purple' },
  { label: 'Ingliz tili', emoji: '🌍', color: 'primary' },
  { label: 'Tarix', emoji: '📜', color: 'accent' },
  { label: 'Informatika', emoji: '💻', color: 'success' },
]
