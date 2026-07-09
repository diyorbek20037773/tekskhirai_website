import { useTranslation } from 'react-i18next'
import { Camera, ScanLine, ClipboardCheck } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

const ICONS = [Camera, ScanLine, ClipboardCheck]

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true })

  return (
    <section id="how" className="relative py-24 sm:py-32">
      {/* soft section tint */}
      <div className="pointer-events-none absolute inset-0 mesh-light opacity-60 dark:mesh-dark dark:opacity-40" />
      <div className="container-x relative">
        <SectionHead eyebrow={t('how.badge')} title={t('how.title')} subtitle={t('how.subtitle')} />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent md:block" />

          {steps.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={i} delay={i * 0.12} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 place-items-center">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-600/30">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full border border-primary-200 bg-white text-xs font-extrabold text-primary-600 dark:border-primary-400/30 dark:bg-ink-800 dark:text-primary-300">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">{s.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
