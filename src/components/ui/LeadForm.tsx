import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from './Button'
import TextField from './TextField'
import { formatPhone, validateContacts } from '../../lib/validation'
import type { ContactErrors } from '../../lib/validation'
import { IconArrowRight } from './Icons'

interface LeadFormProps {
  subject?: string
  cta?: string
  onSuccess: () => void
  /** Компактный вариант для футера */
  compact?: boolean
}

/** Базовая лид-форма (имя, телефон, email) + согласие. Без бэкенда. */
export default function LeadForm({ subject, cta = 'Отправить заявку', onSuccess, compact }: LeadFormProps) {
  const [values, setValues] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [agree, setAgree] = useState(true)
  const [sending, setSending] = useState(false)

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    setValues((v) => ({ ...v, [key]: key === 'phone' ? formatPhone(raw) : raw }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validateContacts(values)
    setErrors(next)
    if (Object.keys(next).length > 0) return
    if (!agree) {
      setErrors({ email: undefined, name: undefined, phone: undefined })
      return
    }
    setSending(true)
    // Заглушка: бэкенда нет — имитируем отправку и показываем успех.
    window.setTimeout(() => {
      setSending(false)
      setValues({ name: '', phone: '', email: '' })
      onSuccess()
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {subject && (
        <p className="rounded-lg border border-steel-500/30 bg-steel-500/10 px-3 py-2 text-xs text-steel-300">
          Заявка: {subject}
        </p>
      )}
      <TextField
        label="Имя"
        name="name"
        placeholder="Как к вам обращаться"
        value={values.name}
        onChange={set('name')}
        error={errors.name}
        autoComplete="name"
      />
      <TextField
        label="Телефон"
        name="phone"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        value={values.phone}
        onChange={set('phone')}
        error={errors.phone}
        autoComplete="tel"
      />
      <TextField
        label="E-mail"
        name="email"
        type="email"
        placeholder="name@company.ru"
        value={values.email}
        onChange={set('email')}
        error={errors.email}
        autoComplete="email"
      />

      {!compact && (
        <label className="flex items-start gap-2 text-xs text-light-300">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 accent-accent-500"
          />
          Согласен с политикой конфиденциальности и обработкой персональных данных
        </label>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={sending} icon={<IconArrowRight className="h-4 w-4" />}>
        {sending ? 'Отправляем…' : cta}
      </Button>
      <p className="text-center text-xs text-light-300/70">
        Никакого спама — только расчёт и подбор оборудования.
      </p>
    </form>
  )
}