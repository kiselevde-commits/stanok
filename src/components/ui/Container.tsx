import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

/** Ограничитель ширины контента с адаптивными отступами. */
export default function Container({ children, className = '', ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} {...rest}>
      {children}
    </div>
  )
}