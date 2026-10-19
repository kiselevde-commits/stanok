import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconPhone(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconDownload(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

export function IconClose(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function IconMenu(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function IconCheck(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconLease(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  )
}

export function IconWarehouse(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M9 21v-8h6v8" />
    </svg>
  )
}

export function IconTraining(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
    </svg>
  )
}

export function IconGear(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

export function IconShield(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconWrench(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.2-5.2l-2.5 2.5-2.1-.4-.4-2.1 2.9-2.1z" />
    </svg>
  )
}

export function IconLayers(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="m12 2 9 5-9 5-9-5 9-5z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  )
}

export function IconTruck(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="1" y="6" width="14" height="11" rx="1" />
      <path d="M15 9h4l3 3v5h-7z" />
      <circle cx="6" cy="18.5" r="2" />
      <circle cx="18" cy="18.5" r="2" />
    </svg>
  )
}

export function IconFileText(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  )
}

export function IconCalculator(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h4" />
    </svg>
  )
}

export function IconFactory(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M2 20h20M4 20V9l5 3V9l5 3V6l6 3v11" />
    </svg>
  )
}

export function IconClock(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function IconAward(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
    </svg>
  )
}

export function IconTelegram(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.9 4.3 18.6 19.8c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.1 13.1l-4.8-1.5c-1-.3-1-1 .2-1.5l18.8-7.3c.9-.3 1.6.2 1.6 1.5z" />
    </svg>
  )
}

export function IconWhatsApp(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.5-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.2-.5v-.5c-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.4.5.1 1 .1 1.4 0 .4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1z" />
    </svg>
  )
}