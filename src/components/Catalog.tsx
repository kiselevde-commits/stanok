import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import MachinePlaceholder from './ui/MachinePlaceholder'
import { catalog } from '../data/site'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { IconArrowRight } from './ui/Icons'

export default function Catalog() {
  const { openModal } = useLeadFlow()

  return (
    <Section id="catalog" tone="dark">
      <Reveal>
        <SectionHeading
          eyebrow="Каталог оборудования"
          title="Направления поставок под ключ"
          subtitle="Подберём модель и комплектацию под ваши чертежи, материал и требуемую производительность."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
        {catalog.map((item, i) => (
          <Reveal key={item.id} delay={i * 80}>
            <Card interactive className="flex h-full flex-col overflow-hidden">
              <div className="relative">
                <MachinePlaceholder variant={item.variant} className="h-40 sm:h-52 w-full" />
                <span className="absolute left-4 top-4 rounded-full bg-graphite-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
                  {item.series}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-light-50">{item.title}</h3>

                <ul className="mt-4 flex-1 space-y-2">
                  {item.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-light-200">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {s}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="mt-6 w-full"
                  onClick={() =>
                    openModal({
                      title: 'Узнать цену и комплектацию',
                      mode: 'price',
                      subject: `${item.series} — ${item.title}`,
                    })
                  }
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  Узнать цену и комплектацию
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}