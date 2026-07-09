import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ScanText, Trophy, Boxes, LayoutDashboard, Fingerprint, MapPin } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'
import { SUBJECT_CHIPS } from '../config'

const META = [
  { Icon: ScanText, tint: 'primary' },
  { Icon: Trophy, tint: 'accent' },
  { Icon: Boxes, tint: 'purple' },
  { Icon: LayoutDashboard, tint: 'success' },
  { Icon: Fingerprint, tint: 'rose' },
  { Icon: MapPin, tint: 'primary' },
]

const TINT = {
  primary: 'bg-primary-500/10 text-primary-500',
  accent: 'bg-accent-500/10 text-accent-500',
  purple: 'bg-purple-500/10 text-purple-500',
  success: 'bg-success-500/10 text-success-500',
  rose: 'bg-rose-500/10 text-rose-500',
}

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true })

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('features.badge')} title={t('features.title')} subtitle={t('features.subtitle')} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const { Icon, tint } = META[i]
            return (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group glass relative h-full overflow-hidden p-7"
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${TINT[tint]}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{it.desc}</p>
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary-500/0 blur-2xl transition-all duration-500 group-hover:bg-primary-500/20" />
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* subject chips */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {SUBJECT_CHIPS.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
              >
                <span>{s.emoji}</span>
                {s.label}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white">
              +6
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
