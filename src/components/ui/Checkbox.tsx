import type { ReactNode } from 'react'
import { IconCheck } from './Icons'

interface CheckboxProps {
  checked: boolean
  onChange: () => void
  children: ReactNode
  id?: string
}

/** Кастомный чекбокс (для квиза и согласий). */
export default function Checkbox({ checked, onChange, children, id }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
        checked
          ? 'border-accent-500 bg-accent-500/10 text-light-50'
          : 'border-white/10 bg-graphite-900/50 text-light-200 hover:border-white/25'
      }`}
    >
      <input id={id} type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
          checked ? 'border-accent-500 bg-accent-500 text-white' : 'border-white/30'
        }`}
      >
        {checked && <IconCheck className="h-3.5 w-3.5" />}
      </span>
      <span>{children}</span>
    </label>
  )
}