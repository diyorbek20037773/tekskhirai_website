import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, Globe, Sparkles, ArrowDown } from 'lucide-react'
import { LINKS } from '../config'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t } = useTranslation()
  const stats = [
    { v: '14', l: t('hero.stat1') },
    { v: '1–11', l: t('hero.stat2') },
    { v: '203', l: t('hero.stat3') },
  ]

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="grain absolute inset-0 mesh-light dark:mesh-dark" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px] dark:bg-primary-500/25"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-x relative grid min-h-screen items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.span variants={item} className="eyebrow">
            <Sparkles className="h-4 w-4" />
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            {t('hero.title')}{' '}
            <span className="text-gradient">{t('hero.titleAccent')}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              <Send className="h-5 w-5" />
              {t('hero.ctaTelegram')}
            </a>
            <a href={LINKS.app} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
              <Globe className="h-5 w-5" />
              {t('hero.ctaPwa')}
            </a>
          </motion.div>

          {/* mini stats */}
          <motion.div variants={item} className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            {stats.map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">{s.v}</div>
                <div className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-sm items-center justify-center lg:max-w-md"
        >
          {/* glow halo */}
          <div className="absolute inset-0 -z-10 mx-auto my-auto h-64 w-64 rounded-full bg-primary-500/40 blur-[90px] dark:bg-primary-500/50 sm:h-80 sm:w-80" />
          <motion.img
            src="/mascot.png"
            alt="TekshirAI robot"
            className="w-64 drop-shadow-2xl sm:w-80 lg:w-[22rem]"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#problem"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 sm:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        {t('hero.scrollHint')}
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  )
}
