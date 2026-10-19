import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Задержка появления, мс */
  delay?: number
  /** Тег-обёртка (по умолчанию div) */
  as?: ElementType
}

/** Обёртка с анимацией появления при скролле. */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}