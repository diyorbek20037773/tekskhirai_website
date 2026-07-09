import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal'
import { TEAM } from '../config'

export default function Team() {
  const { t } = useTranslation()

  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('team.badge')} title={t('team.title')} subtitle={t('team.subtitle')} />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 5) * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass group h-full overflow-hidden p-5 text-center"
              >
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />
                </div>
                <h3 className="mt-4 text-sm font-bold leading-tight text-gray-900 dark:text-white">{m.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary-600 dark:text-primary-400">
                  {t(`team.roles.${m.roleKey}`)}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
