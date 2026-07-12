import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Trophy, MapPin, Calendar, PlayCircle } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'
import { ACHIEVEMENTS } from '../config'

export default function Achievements() {
  const { t } = useTranslation()

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-light opacity-60 dark:mesh-dark dark:opacity-40" />
      <div className="container-x relative">
        <SectionHead
          eyebrow={t('achievements.badge')}
          title={t('achievements.title')}
          subtitle={t('achievements.subtitle')}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.key} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass group h-full overflow-hidden !p-0"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={a.image}
                    alt={t(`achievements.items.${a.key}.title`)}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {/* Winner badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Trophy className="h-3.5 w-3.5" />
                    {t('achievements.winner')}
                  </div>
                  {/* Meta on image */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-3 text-xs font-medium text-white/90">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{a.date}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{a.place}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-accent-500/15 px-2.5 py-1 text-xs font-bold text-accent-600 dark:text-accent-400">
                      🥇 {t(`achievements.items.${a.key}.rank`)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                    {t(`achievements.items.${a.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {t(`achievements.items.${a.key}.desc`)}
                  </p>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:gap-3 dark:text-primary-400"
                    >
                      <PlayCircle className="h-4 w-4" />
                      {t('achievements.watchDemo')}
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
