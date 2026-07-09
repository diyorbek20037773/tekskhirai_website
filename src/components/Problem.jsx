import { useTranslation } from 'react-i18next'
import { Clock, EyeOff, TimerReset, LayoutGrid } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

const ICONS = [Clock, EyeOff, TimerReset, LayoutGrid]

export default function Problem() {
  const { t } = useTranslation()
  const items = t('problem.items', { returnObjects: true })

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t('problem.badge')} title={t('problem.title')} subtitle={t('problem.subtitle')} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={i} delay={i * 0.07}>
                <div className="glass h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{it.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
