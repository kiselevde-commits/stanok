import Container from './ui/Container'
import Button from './ui/Button'
import MachinePlaceholder from './ui/MachinePlaceholder'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { IconArrowRight, IconDownload, IconLease, IconTraining, IconWarehouse } from './ui/Icons'

const bullets = [
  { icon: IconLease, text: 'Лизинг с авансом от 0%' },
  { icon: IconWarehouse, text: 'Свой склад запчастей в Москве и Екатеринбурге' },
  { icon: IconTraining, text: 'Обучение ваших операторов ЧПУ бесплатно' },
]

export default function Hero() {
  const { openModal } = useLeadFlow()

  return (
    <section id="hero" className="relative overflow-hidden pt-[72px]">
      {/* Фон: изображение цеха + затемнение */}
      <div className="absolute inset-0 -z-10">
        <MachinePlaceholder variant="hero" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/85 to-graphite-900/40" />
        <div className="absolute inset-0 bg-tech-grid opacity-60" />
      </div>

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            Прямые поставки из Сингапура
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-light-50 text-balance sm:text-5xl lg:text-6xl">
            Промышленные станки с ЧПУ из Сингапура для предприятий машиностроения
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-light-200 text-pretty">
            Снизьте себестоимость детали до <strong className="text-accent-400">30%</strong> за счёт оборудования
            с точностью позиционирования до <strong className="text-light-50">0.002 мм</strong>. Прямые поставки
            под ключ за <strong className="text-light-50">45 дней</strong> с пусконаладкой и гарантией 3 года.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {bullets.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-graphite-800/60 p-4 backdrop-blur-sm"
              >
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent-500" />
                <span className="text-sm text-light-200">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openModal({ title: 'Подобрать станок под чертёж', mode: 'price', subject: 'Подбор станка под чертёж' })}
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              Подобрать станок под чертёж
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal({ title: 'Скачать каталог 2026', mode: 'catalog' })}
              icon={<IconDownload className="h-4 w-4" />}
            >
              Скачать каталог 2026 (PDF)
            </Button>
          </div>
        </div>

        {/* Правая карточка с фактами */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-graphite-800/70 shadow-2xl shadow-black/40 backdrop-blur-md">
            <MachinePlaceholder variant="turn" className="h-56 w-full" label="ST-Turn" />
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              {[
                { value: '0.002', unit: 'мм', label: 'точность' },
                { value: '45', unit: 'дней', label: 'поставка' },
                { value: '3', unit: 'года', label: 'гарантия' },
              ].map((s) => (
                <div key={s.label} className="p-4 text-center">
                  <p className="font-display text-2xl font-extrabold text-accent-400">
                    {s.value}
                    <span className="ml-1 text-xs font-semibold text-light-300">{s.unit}</span>
                  </p>
                  <p className="mt-1 text-xs text-light-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}