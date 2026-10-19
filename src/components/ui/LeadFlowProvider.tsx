import { createContext, useCallback, useContext, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Modal from './Modal'
import Toast from './Toast'
import LeadForm from './LeadForm'

interface ModalConfig {
  title: string
  subtitle?: string
  /** Предмет запроса (товар/серия), добавляется в сообщение формы */
  subject?: string
  mode?: 'call' | 'price' | 'catalog'
}

interface LeadFlowContextValue {
  openModal: (config: ModalConfig) => void
  showSuccess: () => void
}

const LeadFlowContext = createContext<LeadFlowContextValue | null>(null)

export function useLeadFlow() {
  const ctx = useContext(LeadFlowContext)
  if (!ctx) throw new Error('useLeadFlow must be used within LeadFlowProvider')
  return ctx
}

/** Провайдер модальных окон (заявки, звонок, каталог) и уведомлений. */
export function LeadFlowProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalConfig | null>(null)
  const [toastOpen, setToastOpen] = useState(false)
  const timerRef = useRef<number | null>(null)

  const openModal = useCallback((config: ModalConfig) => setModal(config), [])
  const closeModal = useCallback(() => setModal(null), [])

  const showSuccess = useCallback(() => {
    setModal(null)
    setToastOpen(true)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setToastOpen(false), 6000)
  }, [])

  const modalTitle =
    modal?.mode === 'catalog'
      ? 'Скачать каталог 2026'
      : modal?.mode === 'call'
        ? 'Заказать звонок'
        : 'Узнать цену и комплектацию'

  const modalSubtitle =
    modal?.mode === 'catalog'
      ? 'Оставьте данные — вышлем PDF-каталог и актуальный прайс на почту.'
      : modal?.mode === 'call'
        ? 'Главный инженер перезвонит в течение 15 минут в рабочее время.'
        : modal?.subject
          ? `Запрос по: ${modal.subject}`
          : 'Заполните форму — рассчитаем стоимость и подберём комплектацию.'

  return (
    <LeadFlowContext.Provider value={{ openModal, showSuccess }}>
      {children}
      <Modal open={!!modal} onClose={closeModal} title={modalTitle} subtitle={modalSubtitle}>
        {modal && (
          <LeadForm
            subject={modal.subject}
            cta={modal.mode === 'catalog' ? 'Получить каталог' : 'Отправить заявку'}
            onSuccess={showSuccess}
          />
        )}
      </Modal>
      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        title="Спасибо!"
        message="Инженер свяжется с вами в течение 15 минут."
      />
    </LeadFlowContext.Provider>
  )
}