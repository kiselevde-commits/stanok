import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: ReactNode
}

const base =
  'group relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-white shadow-lg shadow-accent-500/25 hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/30 active:translate-y-0',
  outline:
    'border border-light-300/30 text-light-100 hover:border-accent-500 hover:text-accent-400 hover:-translate-y-0.5 bg-white/5 backdrop-blur-sm',
  ghost: 'text-light-100 hover:text-accent-400',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

/** Универсальная кнопка проекта. */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </button>
  )
}