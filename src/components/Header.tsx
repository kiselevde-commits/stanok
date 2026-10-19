import { useEffect, useState } from 'react'
import Container from './ui/Container'
import Button from './ui/Button'
import { company, nav } from '../data/site'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { IconMenu, IconPhone, IconClose, IconArrowRight } from './ui/Icons'
import logoUrl from '../assets/logo.svg'

export default function Header() {
  const { openModal } = useLeadFlow()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Автоматически подсвечиваем пункт навигации при скролле через IntersectionObserver
  useEffect(() => {
    const ids = ['hero', ...nav.map((n) => n.id)]
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-graphite-900/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Логотип */}
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-3 relative z-60"
          aria-label="SingaTech Mash — на главную"
        >
          <img
            src={logoUrl}
            alt="SingaTech Mash"
            draggable={false}
            className={`w-auto select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] transition-[height] duration-300 ${
              scrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-14'
            }`}
          />
        </a>

        {/* Навигация — десктоп (пилюля по центру) */}
        <nav
          className="hidden shrink-0 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm xl:flex xl:min-w-0 relative"
          aria-label="Основная навигация"
        >
          {nav.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                    : 'text-light-200/80 hover:bg-white/10 hover:text-light-50'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Правая часть */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={company.phoneHref}
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap text-[13px] font-bold text-light-50 tabular-nums transition-colors hover:text-accent-400 xl:flex"
          >
            <IconPhone className="h-4 w-4 text-accent-500" />
            {company.phone}
          </a>
          <div className="hidden h-8 w-px bg-white/10 xl:block" aria-hidden="true" />
          <Button
            variant="primary"
            className="hidden shrink-0 whitespace-nowrap sm:inline-flex"
            onClick={() => openModal({ title: 'Заказать звонок', mode: 'call' })}
          >
            Заказать звонок
          </Button>
          <button
            type="button"
            className="shrink-0 rounded-lg p-2 text-light-100 transition-colors hover:bg-white/10 hover:text-accent-400 xl:hidden"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Мобильное меню */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-full z-40 overflow-y-auto bg-graphite-950/95 backdrop-blur-xl animate-fade-in xl:hidden"
        >
          <Container className="py-6">
            <nav className="stagger flex flex-col divide-y divide-white/5" aria-label="Мобильная навигация">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveId(item.id)
                    setMenuOpen(false)
                  }}
                  className="flex items-center justify-between px-2 py-4 text-xl font-medium text-light-100 transition-colors hover:text-accent-400"
                >
                  {item.label}
                  <IconArrowRight className="h-5 w-5 text-light-200/60" />
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 px-2 text-2xl font-bold text-light-50 tabular-nums"
              >
                <IconPhone className="h-5 w-5 text-accent-500" />
                {company.phone}
              </a>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMenuOpen(false)
                  openModal({ title: 'Заказать звонок', mode: 'call' })
                }}
              >
                Заказать звонок
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}