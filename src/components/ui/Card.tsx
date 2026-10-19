import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  /** Эффект парения при наведении */
  interactive?: boolean
}

/** Карточка с единым индустриальным оформлением. */
export default function Card({ children, className = '', interactive = false, ...rest }: CardProps) {
  const hover = interactive
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-2xl hover:shadow-black/40'
    : ''
  return (
    <div
      className={`rounded-2xl border border-white/8 bg-graphite-700/60 backdrop-blur-sm ${hover} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}