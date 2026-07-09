import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Play } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'
import { LINKS } from '../config'

export default function DemoVideo() {
  const { t } = useTranslation()
  const [play, setPlay] = useState(false)
  const id = LINKS.demoVideoId

  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('demo.badge')} title={t('demo.title')} subtitle={t('demo.subtitle')} />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-4xl">
            {/* glow */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary-500/20 blur-3xl dark:bg-primary-500/25" />
            <div className="glass overflow-hidden !rounded-[1.5rem] p-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                {play ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                    title="TekshirAI demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label="Play demo">
                    <img
                      src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                      alt="Demo preview"
                      className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                      onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary-600 text-white shadow-2xl shadow-primary-600/50 transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8" fill="currentColor" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
