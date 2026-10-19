export interface ContactValues {
  name: string
  phone: string
  email: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

/** Пренормализация телефона — оставляем цифры и ведущий плюс. */
export function normalizePhone(value: string): string {
  return value.replace(/[^\d+]/g, '')
}

/** Валидация контактной формы. Возвращает объект ошибок (пустой = успех). */
export function validateContacts(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  const name = values.name.trim()
  if (name.length < 2) errors.name = 'Укажите имя (минимум 2 символа)'

  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = 'Введите корректный номер телефона'
  }

  const email = values.email.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Введите корректный e-mail'
  }

  return errors
}

/** Форматирование телефона в маску +7 (999) 123-45-67 по мере ввода. */
export function formatPhone(input: string): string {
  let digits = input.replace(/\D/g, '')
  if (digits.startsWith('8')) digits = '7' + digits.slice(1)
  if (!digits.startsWith('7')) digits = '7' + digits
  digits = digits.slice(0, 11)

  const p = digits.slice(1)
  let out = '+7'
  if (p.length) out += ` (${p.slice(0, 3)}`
  if (p.length >= 3) out += `) ${p.slice(3, 6)}`
  if (p.length >= 6) out += `-${p.slice(6, 8)}`
  if (p.length >= 8) out += `-${p.slice(8, 10)}`
  return out
}