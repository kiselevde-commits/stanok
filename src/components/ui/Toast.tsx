import type { ReactNode } from 'react'
import { IconCheck, IconClose } from './Icons'

interface ToastProps {
  open: boolean
  title: string
  message: string
  onClose: () => void
  children?: ReactNode
}

/** Всплывающее уведомление об успешной отправке. */
export default function Toast({ open, title, message, onClose }: ToastProps) {
  if (!open) return null
  return (
    <div className="fixed bottom-5 right-5 z-[110] w-[min(92vw,380px)] animate-slide-up">
      <div className="flex items-start gap-3 rounded-2xl border border-accent-500/40 bg-graphite-700 p-4 shadow-2xl shadow-black/50">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
          <IconCheck className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display font-bold text-light-50">{title}</p>
          <p className="mt-0.5 text-sm text-light-300">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть уведомление"
          className="rounded-lg p-1.5 text-light-300 transition-colors hover:bg-white/5 hover:text-accent-400"
        >
          <IconClose className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}