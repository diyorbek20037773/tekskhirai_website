import { useTranslation } from 'react-i18next'
import { Send, Globe, Mail, Heart, Github, Youtube, Twitter, Megaphone } from 'lucide-react'
import Reveal from './Reveal'
import Logo from './Logo'
import { LINKS, SOCIALS } from '../config'

const SOCIAL_ICON = {
  github: Github,
  telegram: Send,
  channel: Megaphone,
  youtube: Youtube,
  x: Twitter,
  email: Mail,
}

export default function Footer() {
  const { t } = useTranslation()
  const year = 2026

  return (
    <footer className="relative overflow-hidden pt-24">
      {/* CTA band */}
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-600 px-8 py-14 text-center shadow-2xl shadow-primary-600/30 sm:px-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-purple-400/20 blur-2xl" />
            <h2 className="relative mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-4xl">
              {t('footer.tagline')}
            </h2>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-primary-700 transition hover:-translate-y-0.5 hover:bg-gray-50 sm:w-auto"
              >
                <Send className="h-5 w-5" />
                {t('ways.telegram.cta')}
              </a>
              <a
                href={LINKS.app}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                <Globe className="h-5 w-5" />
                {t('ways.pwa.cta')}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer bottom */}
      <div className="container-x mt-16 border-t border-gray-200 py-10 dark:border-white/10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICON[s.key] || Globe
              return (
                <a
                  key={s.key}
                  href={s.url}
                  target={s.key === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-white/60 text-gray-500 transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-primary-400/50 dark:hover:text-primary-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-gray-400 sm:flex-row dark:text-gray-500">
          <span>© {year} TekshirAI. {t('footer.rights')}</span>
          <span className="inline-flex items-center gap-1.5">
            {t('footer.madeIn')} <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          </span>
        </div>
      </div>
    </footer>
  )
}
