import { useState } from 'react'
import Section from './ui/Section'
import Card from './ui/Card'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import TextField from './ui/TextField'
import MachinePlaceholder from './ui/MachinePlaceholder'
import { quizSteps } from '../data/site'
import { useLeadFlow } from './ui/LeadFlowProvider'
import { formatPhone, validateContacts } from '../lib/validation'
import type { ContactErrors } from '../lib/validation'
import { IconArrowRight, IconCheck, IconCalculator } from './ui/Icons'

export default function Quiz() {
  const { showSuccess } = useLeadFlow()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [values, setValues] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sending, setSending] = useState(false)

  const total = quizSteps.length + 1 // 3 вопроса + финальная форма
  const progress = Math.round(((step + 1) / total) * 100)

  const currentQ = quizSteps[step]
  const isFinal = step === quizSteps.length

  const selectOption = (value: string) => {
    setAnswers((a) => ({ ...a, [step]: value }))
    setStep((s) => Math.min(s + 1, quizSteps.length))
  }

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    setValues((v) => ({ ...v, [key]: key === 'phone' ? formatPhone(raw) : raw }))
  }

  const submit = () => {
    const next = validateContacts(values)
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setValues({ name: '', phone: '', email: '' })
      setAnswers({})
      setStep(0)
      showSuccess()
    }, 500)
  }

  return (
    <Section id="quiz" tone="light">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            <span className="h-px w-6 bg-accent-500" />
            Подбор за 2 часа
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-graphite-900 sm:text-4xl">
            Подберём станок и рассчитаем технологию под вашу деталь
          </h2>
          <p className="mt-4 text-base text-graphite-600 sm:text-lg">
            Ответьте на три коротких вопроса — главный инженер проекта подготовит коммерческое предложение
            и технологический расчёт.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-graphite-900/10 shadow-xl">
            <MachinePlaceholder variant="workshop" className="h-40 sm:h-52 w-full" label="Промышленный цех" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="border-graphite-900/10 bg-white p-6 shadow-2xl shadow-graphite-900/10 sm:p-8">
            {/* Прогресс */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-graphite-600">
                <span>
                  Шаг {Math.min(step + 1, total)} из {total}
                </span>
                <span className="text-accent-600">{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-graphite-900/10">
                <div
                  className="h-full rounded-full bg-accent-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {!isFinal ? (
              <div className="animate-fade-in">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold text-graphite-900">
                  <IconCalculator className="h-6 w-6 text-accent-500" />
                  {currentQ.question}
                </h3>
                <div className="mt-5 grid gap-3">
                  {currentQ.options.map((opt) => {
                    const selected = answers[step] === opt
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => selectOption(opt)}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all ${
                          selected
                            ? 'border-accent-500 bg-accent-500/10 text-graphite-900'
                            : 'border-graphite-900/12 bg-light-50 text-graphite-800 hover:border-accent-500/60 hover:bg-accent-500/5'
                        }`}
                      >
                        {opt}
                        <IconCheck
                          className={`h-5 w-5 transition-opacity ${selected ? 'text-accent-500 opacity-100' : 'opacity-0'}`}
                        />
                      </button>
                    )
                  })}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(s - 1, 0))}
                    className="text-sm font-medium text-graphite-600 transition-colors hover:text-accent-600 disabled:opacity-40"
                  >
                    ← Назад
                  </button>
                  {answers[step] && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.min(s + 1, quizSteps.length))}
                      className="text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                    >
                      Далее →
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl font-bold text-graphite-900">Получить КП и расчёт</h3>
                <p className="mt-1 text-sm text-graphite-600">
                  Оставьте контакты — пришлём КП и технологический расчёт.
                </p>

                {Object.keys(answers).length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {Object.entries(answers).map(([k, v]) => (
                      <li
                        key={k}
                        className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-700"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 grid gap-4">
                  <TextField
                    label="Имя"
                    name="quiz-name"
                    placeholder="Как к вам обращаться"
                    value={values.name}
                    onChange={set('name')}
                    error={errors.name}
                  />
                  <TextField
                    label="Телефон"
                    name="quiz-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={values.phone}
                    onChange={set('phone')}
                    error={errors.phone}
                  />
                  <TextField
                    label="E-mail"
                    name="quiz-email"
                    type="email"
                    placeholder="name@company.ru"
                    value={values.email}
                    onChange={set('email')}
                    error={errors.email}
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={sending}
                    onClick={submit}
                    icon={<IconArrowRight className="h-4 w-4" />}
                  >
                    {sending ? 'Отправляем…' : 'Получить КП и расчёт'}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setStep(quizSteps.length - 1)}
                    className="text-sm font-medium text-graphite-600 transition-colors hover:text-accent-600"
                  >
                    ← Вернуться к вопросам
                  </button>
                </div>
              </div>
            )}
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}