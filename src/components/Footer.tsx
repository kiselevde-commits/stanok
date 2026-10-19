import Container from './ui/Container'
import LeadForm from './ui/LeadForm'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { company, nav } from '../data/site'
import { IconPhone, IconTelegram, IconWhatsApp } from './ui/Icons'

export default function Footer() {
  const { showSuccess } = useLeadFlow()
  const year = new Date().getFullYear()

  return (
    <footer id="contacts" className="border-t border-white/10 bg-graphite-950">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Контакты */}
          <div>
            <img src="/logo.svg" alt="SingaTech Mash" className="h-11 w-auto" />

            <h2 className="mt-6 font-display text-2xl font-bold text-light-50">
              Остались вопросы? Свяжитесь с главным инженером проекта
            </h2>

            <div className="mt-6 space-y-5">
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-lg font-semibold text-light-50 transition-colors hover:text-accent-400"
              >
                <IconPhone className="h-5 w-5 text-accent-500" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block text-light-200 transition-colors hover:text-accent-400"
              >
                {company.email}
              </a>

              <ul className="space-y-3">
                {company.offices.map((o) => (
                  <li key={o.city} className="flex items-start gap-3 text-sm text-light-200">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-accent-500/15 text-[10px] font-bold text-accent-400">
                      РФ
                    </span>
                    <span>
                      <span className="font-semibold text-light-50">{o.label}:</span> г. {o.city},{' '}
                      {o.address}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={company.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-light-200 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-400"
                >
                  <IconTelegram className="h-5 w-5" />
                </a>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-light-200 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-400"
                >
                  <IconWhatsApp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="rounded-3xl border border-white/10 bg-graphite-800/70 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-light-50">Запросить консультацию</h3>
            <p className="mt-1.5 text-sm text-light-300">
              Оставьте контакты — перезвоним в течение 15 минут в рабочее время.
            </p>
            <div className="mt-6">
              <LeadForm onSuccess={showSuccess} compact />
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-light-300 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-accent-400">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <a href="#" className="transition-colors hover:text-accent-400">
              Политика конфиденциальности
            </a>
            <span>
              © {year} {company.name}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}