# TekshirAI — Marketing Website

TekshirAI loyihasining tanishtiruv (landing) sayti. React + Vite + Tailwind + Framer Motion, 3 tilli (UZ/RU/EN), dark/light tema.

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # → dist/
npm run preview    # build'ni lokal ko'rish
```

## Sozlash

Barcha tashqi linklar bitta joyda: [`src/config.js`](src/config.js)
- `LINKS.telegram` — Telegram bot @username (⚠️ haqiqiysiga almashtiring)
- `LINKS.app` — ilova (PWA) URL
- `LINKS.demoVideoId` — YouTube demo video ID
- `LINKS.email` — kontakt email
- `TEAM` — jamoa a'zolari (rasmlar `public/team/`)

Matnlar: [`src/locales/{uz,ru,en}.json`](src/locales/)

## Deploy (Railway)

`railway.json` tayyor:
- Build: `npm ci && npm run build`
- Start: `npx serve -s dist -l $PORT`

Root domen → shu sayt. Ilova `app.` subdomen'da qoladi.

## Struktura

- `src/components/` — bo'limlar (Hero, Problem, HowItWorks, Features, DemoVideo, TwoWays, Stats, Tech, Team, Footer)
- `src/context/ThemeContext.jsx` — dark/light tema
- `src/i18n.js` + `src/locales/` — 3 til
- `public/` — maskot, jamoa rasmlari, favicon
