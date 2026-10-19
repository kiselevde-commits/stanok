import type { InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

/** Поле ввода с подписью и сообщением об ошибке. */
export default function TextField({ label, error, id, className = '', ...rest }: TextFieldProps) {
  const fieldId = id ?? rest.name
  return (
    <div className="w-full">
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-light-200">
        {label}
      </label>
      <input
        id={fieldId}
        className={`w-full rounded-xl border bg-graphite-900/70 px-4 py-3 text-light-50 placeholder-light-300/50 outline-none transition-colors ${
          error ? 'border-red-500/70' : 'border-white/10 focus:border-accent-500'
        } ${className}`}
        {...rest}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  )
}