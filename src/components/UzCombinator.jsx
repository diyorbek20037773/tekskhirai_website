import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Play, Trophy, Users, School, Rocket } from 'lucide-react'
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
      {/* YC-orange tinted dark band */}
      <div className="absolute inset-0 bg-ink-950" />
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(55% 45% at 50% 0%, rgba(255,106,0,0.16), transparent 70%), radial-gradient(50% 40% at 100% 100%, rgba(255,106,0,0.10), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="container-x relative">
        {/* Head */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-orange-400">
              <Rocket className="h-4 w-4" />
              {t('uzc.badge')}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {t('uzc.title')}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              {t('uzc.subtitle')}
            </p>
          </Reveal>
        </div>

        {/* Video pitch */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] blur-3xl" style={{ background: 'rgba(255,106,0,0.18)' }} />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
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
                      className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                      onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
            <p className="mt-3 text-center font-mono text-xs text-gray-400">{t('uzc.videoNote')}</p>
          </div>
        </Reveal>

        {/* Traction */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <p className="text-center font-mono text-sm uppercase tracking-widest text-orange-400/80">
              {t('uzc.tractionTitle')}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {TRACTION.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-colors hover:border-orange-400/40">
                  <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-orange-500/15 text-orange-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                    {t(`uzc.traction.${key}.value`)}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-gray-200">{t(`uzc.traction.${key}.label`)}</div>
                  <div className="mt-1 text-xs text-gray-400">{t(`uzc.traction.${key}.sub`)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
