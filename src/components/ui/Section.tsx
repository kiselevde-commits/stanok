import type { HTMLAttributes, ReactNode } from 'react'
import Container from './Container'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  id?: string
  /** 'dark' — графитовый фон, 'light' — светлый блок */
  tone?: 'dark' | 'light'
  className?: string
  containerClassName?: string
}

/** Секция страницы с якорным id и переключением тона фона. */
export default function Section({
  children,
  id,
  tone = 'dark',
  className = '',
  containerClassName = '',
  ...rest
}: SectionProps) {
  const tones = {
    dark: 'bg-graphite-800 text-light-100',
    light: 'bg-light-50 text-graphite-900',
  }
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}