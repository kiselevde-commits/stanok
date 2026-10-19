import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import IconByName from './ui/IconByName'
import { stats } from '../data/site'

export default function Stats() {
  return (
    <Section id="about" tone="dark" className="relative overflow-hidden bg-tech-grid">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-graphite-900 via-graphite-800 to-graphite-900" />
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="О нас в цифрах"
          title="8 лет поставляем точность на российские заводы"
          subtitle="Собственные склады, сервисные инженеры и пусконаладка под ключ по всей России."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="rounded-2xl border border-white/8 bg-graphite-700/50 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent-500/40">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/12 text-accent-500 hover:drop-shadow-[0_0_0.5rem_accent-500] hover:scale-110 transition-transform duration-300">
                <IconByName name={s.icon} className="h-6 w-6 transition-transform duration-300" />
              </span>
              <p className="mt-4 font-display text-4xl font-extrabold text-accent-400">{s.value}</p>
              <p className="mt-2 text-sm text-light-200">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}