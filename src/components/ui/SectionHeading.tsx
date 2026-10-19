import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  /** Светлая тема (для светлых секций) */
  light?: boolean
  align?: 'left' | 'center'
}

/** Единый заголовок секции с надзаголовком-«плашкой». */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left'
  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${align === 'center' ? '' : ''}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-accent-600' : 'text-accent-400'
          }`}
        >
          <span className="h-px w-6 bg-accent-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-graphite-900' : 'text-light-50'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-graphite-600' : 'text-light-200'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}