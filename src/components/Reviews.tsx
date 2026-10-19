import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { reviews } from '../data/site'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { IconArrowRight } from './ui/Icons'

function StarRating({ count }: { count: 5 | 4 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Оценка: ${count} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < count ? 'text-accent-500' : 'text-graphite-500'}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { openModal } = useLeadFlow()

  return (
    <Section id="reviews" tone="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-tech-grid opacity-25" />

      <Reveal>
        <SectionHeading
          eyebrow="Отзывы клиентов"
          title="140+ запущенных станков — вот что говорят производственники"
          subtitle="Реальные кейсы предприятий: от малых мастерских до оборонных заводов."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <Reveal key={r.company} delay={i * 80}>
            <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-graphite-700/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-2xl hover:shadow-black/40">
              {/* Шапка карточки */}
              <header>
                <div className="flex items-center justify-between gap-2">
                  <StarRating count={r.rating} />
                  <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent-400">
                    {r.machine}
                  </span>
                </div>

                <p className="mt-4 font-display text-base font-bold text-light-50">{r.company}</p>
                <p className="mt-0.5 text-xs text-steel-400">{r.industry}</p>
              </header>

              {/* Цитата */}
              <blockquote className="mt-4 flex-1">
                <p className="text-sm leading-relaxed text-light-200">«{r.text}»</p>
              </blockquote>

              {/* Автор */}
              <footer className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/15 font-display text-sm font-bold text-accent-400"
                  aria-hidden="true"
                >
                  {r.author.charAt(0)}
                </span>
                <p className="text-xs text-light-300">{r.author}</p>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA снизу */}
      <Reveal delay={200}>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-base text-light-200">
            Хотите такой же результат?{' '}
            <span className="text-accent-400">Подберём станок под вашу задачу за 2 часа.</span>
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              openModal({
                title: 'Получить консультацию',
                mode: 'price',
                subject: 'Консультация после отзывов',
              })
            }
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            Получить бесплатную консультацию
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
