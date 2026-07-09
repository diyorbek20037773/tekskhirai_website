import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import Reveal, { SectionHead } from './Reveal'

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { t } = useTranslation()
  const items = t('stats.items', { returnObjects: true })

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-light opacity-70 dark:mesh-dark dark:opacity-50" />
      <div className="container-x relative">
        <SectionHead eyebrow={t('stats.badge')} title={t('stats.title')} />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass flex flex-col items-center p-8 text-center">
                <div className="text-4xl font-extrabold text-gradient sm:text-5xl">
                  <CountUp to={it.value} suffix={it.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">{it.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
