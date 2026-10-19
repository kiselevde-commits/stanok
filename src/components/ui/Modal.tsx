import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { IconClose } from './Icons'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
}

/** Доступное модальное окно с блокировкой скролла и закрытием по Esc/клику по фону. */
export default function Modal({ open, onClose, title, subtitle, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Фокус в окно
    const t = window.setTimeout(() => panelRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      window.clearTimeout(t)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-graphite-800 p-6 shadow-2xl animate-slide-up sm:p-8 focus:outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно"
          className="absolute right-4 top-4 rounded-lg p-2 text-light-300 transition-colors hover:bg-white/5 hover:text-accent-400"
        >
          <IconClose className="h-5 w-5" />
        </button>

        <h3 className="pr-10 font-display text-2xl font-bold text-light-50">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-light-300">{subtitle}</p>}

        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}