import { useTranslation } from 'react-i18next'
import { Send, Globe, Check, ArrowRight } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'
import { LINKS } from '../config'

function WayCard({ icon: Icon, accent, title, desc, steps, cta, href, featured }) {
  return (
    <div
      className={`glass relative flex h-full flex-col p-8 ${
        featured ? 'ring-2 ring-primary-500/40' : ''
      }`}
    >
      <div className={`grid h-14 w-14 place-items-center rounded-2xl ${accent}`}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{desc}</p>

      <ul className="mt-6 space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-success-500/15 text-success-500">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{s}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold transition-all duration-300 ${
          featured
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-500 hover:-translate-y-0.5'
            : 'border border-gray-300 text-gray-700 hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-gray-100 dark:hover:border-primary-400/60'
        }`}
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}

export default function TwoWays() {
  const { t } = useTranslation()
  return (
    <section id="ways" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('ways.badge')} title={t('ways.title')} subtitle={t('ways.subtitle')} />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal>
            <WayCard
              icon={Send}
              accent="bg-primary-500/10 text-primary-500"
              title={t('ways.telegram.title')}
              desc={t('ways.telegram.desc')}
              steps={t('ways.telegram.steps', { returnObjects: true })}
              cta={t('ways.telegram.cta')}
              href={LINKS.telegram}
              featured
            />
          </Reveal>
          <Reveal delay={0.1}>
            <WayCard
              icon={Globe}
              accent="bg-purple-500/10 text-purple-500"
              title={t('ways.pwa.title')}
              desc={t('ways.pwa.desc')}
              steps={t('ways.pwa.steps', { returnObjects: true })}
              cta={t('ways.pwa.cta')}
              href={LINKS.app}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
