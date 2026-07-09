import { useTranslation } from 'react-i18next'
import Reveal, { SectionHead } from './Reveal'
import { TECH } from '../config'

export default function Tech() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('tech.badge')} title={t('tech.title')} subtitle={t('tech.subtitle')} />
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {TECH.map((name, i) => (
              <span
                key={name}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-primary-400/50 dark:hover:text-primary-300"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
