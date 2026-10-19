import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import IconByName from './ui/IconByName'
import { processSteps } from '../data/site'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { IconArrowRight, IconClock } from './ui/Icons'

export default function Process() {
  const { openModal } = useLeadFlow()

  return (
    <Section id="leasing" tone="light">
      <Reveal>
        <SectionHeading
          light
          align="center"
          eyebrow="Как мы поставляем оборудование"
          title="Лизинг и доставка: 5 шагов до запуска"
          subtitle="Полный цикл под ключ — от технического аудита до сдачи точности на вашем заводе."
        />
      </Reveal>

      <ol className="relative mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {/* Связка таймлайна — десктоп (горизонталь) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-gradient-to-r from-accent-500/20 via-accent-500 to-accent-500/20 lg:block"
        />
        {/* Связка таймлайна — мобильные (вертикаль) */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-12 left-7 top-12 w-px bg-gradient-to-b from-accent-500/15 via-accent-500/50 to-accent-500/15 lg:hidden"
        />

        {processSteps.map((step, i) => (
          <Reveal
            key={step.title}
            as="li"
            delay={i * 100}
            className="group relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
          >
            {/* Узел с иконкой + порядковый номер */}
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-light-50 bg-graphite-900 text-accent-400 shadow-lg shadow-graphite-900/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent-500 lg:mx-auto">
              <IconByName name={step.icon} className="h-6 w-6" />
              <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 font-display text-xs font-extrabold text-white ring-2 ring-light-50">
                {i + 1}
              </span>
            </span>

            {/* Карточка этапа */}
            <div className="flex-1 rounded-2xl border border-graphite-900/10 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-500/40 group-hover:shadow-xl group-hover:shadow-graphite-900/10 lg:mt-6 lg:w-full">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-semibold text-accent-600">
                <IconClock className="h-3.5 w-3.5" />
                {step.duration}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-graphite-900">{step.title}</h3>
              <p className="mt-1.5 text-sm text-graphite-600">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Итоговая плашка «45 дней под ключ» */}
      <Reveal delay={250}>
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-accent-500/20 bg-gradient-to-r from-accent-500/10 via-accent-500/5 to-transparent p-6 sm:flex-row sm:p-7">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white shadow-lg shadow-accent-500/30">
              <IconClock className="h-6 w-6" />
            </span>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-graphite-900">
                В среднем 45 дней от заявки до сдачи точности
              </p>
              <p className="mt-0.5 text-sm text-graphite-600">
                Фиксированные сроки в договоре и штрафы за просрочку — на нашей стороне.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            className="w-full shrink-0 sm:w-auto"
            onClick={() =>
              openModal({
                title: 'Рассчитать сроки поставки',
                mode: 'price',
                subject: 'Расчёт сроков поставки',
              })
            }
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            Рассчитать сроки
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}