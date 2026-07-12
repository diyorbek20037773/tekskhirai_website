import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap, BookUser, Users, Check } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

const CARDS = [
  { key: 'teacher', icon: BookUser, tint: 'primary' },
  { key: 'student', icon: GraduationCap, tint: 'success' },
  { key: 'parent', icon: Users, tint: 'purple' },
]

const TINT = {
  primary: { box: 'bg-primary-500/10 text-primary-500', check: 'bg-primary-500/15 text-primary-500', ring: 'group-hover:border-primary-300/60' },
  success: { box: 'bg-success-500/10 text-success-500', check: 'bg-success-500/15 text-success-500', ring: 'group-hover:border-success-500/50' },
  purple: { box: 'bg-purple-500/10 text-purple-500', check: 'bg-purple-500/15 text-purple-500', ring: 'group-hover:border-purple-500/50' },
}

export default function Audiences() {
  const { t } = useTranslation()

  return (
    <section id="audiences" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('audiences.badge')} title={t('audiences.title')} subtitle={t('audiences.subtitle')} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ key, icon: Icon, tint }, i) => {
            const points = t(`audiences.${key}.points`, { returnObjects: true })
            const c = TINT[tint]
            return (
              <Reveal key={key} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`glass group h-full border-transparent p-7 transition-colors ${c.ring}`}
                >
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.box}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                    {t(`audiences.${key}.role`)}
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${c.check}`}>
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
