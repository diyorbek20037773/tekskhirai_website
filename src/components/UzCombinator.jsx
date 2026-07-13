import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Play, Trophy, Users, School, Rocket, X, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { LINKS } from '../config'

const TRACTION = [
  { key: 'beta', icon: Users },
  { key: 'hackathon', icon: Trophy },
  { key: 'pilot', icon: School },
]

export default function UzCombinator() {
  const { t } = useTranslation()
  const [play, setPlay] = useState(false)
  const id = LINKS.uzcVideoId

  return (
    <section id="uzc" className="relative overflow-hidden py-24 sm:py-32">
      {/* Theme-aware surface: light = cream (uzc.html), dark = deep ink */}
      <div className="absolute inset-0 bg-[#FDF8F3] dark:bg-ink-950" />
      {/* dotted texture (light) — matches the uzc.html reference */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,14,13,0.09) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* orange glow (both themes) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(55% 45% at 50% 0%, rgba(255,106,0,0.12), transparent 70%), radial-gradient(50% 40% at 100% 100%, rgba(255,106,0,0.08), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0 hidden dark:block" />

      <div className="container-x relative">
        {/* Head */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-orange-600 dark:text-orange-400">
              <Rocket className="h-4 w-4" />
              {t('uzc.badge')}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0F0E0D] dark:text-white sm:text-5xl">
              {t('uzc.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5A544E] dark:text-gray-300 sm:text-lg">
              {t('uzc.subtitle')}
            </p>
          </Reveal>
        </div>

        {/* Problem vs Solution */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#E8DDD1] bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5A544E] dark:text-gray-400">
                {t('uzc.compare.nowTag')}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#0F0E0D] dark:text-white">{t('uzc.compare.nowTitle')}</h3>
              <ul className="mt-4 space-y-3">
                {t('uzc.compare.nowPoints', { returnObjects: true }).map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#5A544E] dark:text-gray-300">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#5A544E]/60 dark:text-gray-500" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-orange-500 bg-white p-7 shadow-[0_12px_40px_rgba(255,106,0,0.14)] dark:bg-white/[0.04]">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
                {t('uzc.compare.usTag')}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#0F0E0D] dark:text-white">{t('uzc.compare.usTitle')}</h3>
              <ul className="mt-4 space-y-3">
                {t('uzc.compare.usPoints', { returnObjects: true }).map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#3a352f] dark:text-gray-200">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Video pitch */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] blur-3xl" style={{ background: 'rgba(255,106,0,0.16)' }} />
            <div className="overflow-hidden rounded-3xl border border-[#E8DDD1] bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:backdrop-blur-xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                {play ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                    title="TekshirAI — UzCombinator pitch"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label="Play pitch">
                    <img
                      src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                      alt="Pitch preview"
                      className="h-full w-full object-cover opacity-95 transition group-hover:opacity-100"
                      onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white shadow-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: '#FF6A00', boxShadow: '0 0 50px rgba(255,106,0,0.6)' }}
                    >
                      <Play className="ml-1 h-8 w-8" fill="currentColor" />
                    </span>
                  </button>
                )}
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-xs text-[#5A544E] dark:text-gray-400">{t('uzc.videoNote')}</p>
          </div>
        </Reveal>

        {/* Traction */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <p className="text-center font-mono text-sm uppercase tracking-widest text-orange-600/80 dark:text-orange-400/80">
              {t('uzc.tractionTitle')}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {TRACTION.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-[#E8DDD1] bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:backdrop-blur-xl dark:hover:border-orange-400/40">
                  <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-3xl font-extrabold text-[#FF6A00] sm:text-4xl">
                    {t(`uzc.traction.${key}.value`)}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#0F0E0D] dark:text-gray-200">{t(`uzc.traction.${key}.label`)}</div>
                  <div className="mt-1 text-xs text-[#5A544E] dark:text-gray-400">{t(`uzc.traction.${key}.sub`)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
