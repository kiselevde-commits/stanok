import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Reveal from './ui/Reveal'
import IconByName from './ui/IconByName'
import { advantages } from '../data/site'

export default function Advantages() {
  return (
    <Section id="advantages" tone="dark" className="relative">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-40" />
      <Reveal>
        <SectionHeading
          eyebrow="Почему Сингапур — это выгодно"
          title="Немецко-японское качество без санкционных рисков"
          subtitle="Оборудование собирается в Сингапуре из комплектующих топовых поставщиков: качество — как у европейцев, логистика и сервис — без параллельного импорта."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {advantages.map((a, i) => (
          <Reveal key={a.title} delay={i * 80}>
            <Card interactive className="h-full p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/12 text-accent-500">
                <IconByName name={a.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-light-50">{a.title}</h3>
              <p className="mt-2 text-sm text-light-200">{a.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Плашка о госзакупках */}
      <Reveal delay={200}>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-steel-500/30 bg-steel-500/8 p-6 sm:flex-row">
          <p className="text-center font-display text-lg font-bold text-light-50 sm:text-left">
            Работаем по 44-ФЗ, 223-ФЗ и с ГОЗ / спецсчетами
          </p>
          <span className="rounded-full border border-steel-400/40 px-4 py-1.5 text-sm font-medium text-steel-300">
            Полное документальное сопровождение
          </span>
        </div>
      </Reveal>
    </Section>
  )
}