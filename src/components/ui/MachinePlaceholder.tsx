import type { CSSProperties } from 'react'

export type PlaceholderVariant =
  | 'hero'
  | 'turn'
  | 'mill'
  | 'grind'
  | 'edm'
  | 'workshop'

interface MachinePlaceholderProps {
  variant: PlaceholderVariant
  className?: string
  /** Дополнительная подпись поверх заглушки (напр. название серии) */
  label?: string
  style?: CSSProperties
}

/**
 * Векторные заглушки промышленного оборудования.
 * Служат заменой фото станков до загрузки реальных изображений.
 * Все они — единый градиентный стиль проекта (графит + оранжевый + сталь).
 */
export default function MachinePlaceholder({
  variant,
  className = '',
  label,
  style,
}: MachinePlaceholderProps) {
  const uid = `ph-${variant}`
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
      role="img"
      aria-label={label ?? 'Изображение оборудования SingaTech Mash'}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#23272d" />
          <stop offset="1" stopColor="#0f1114" />
        </linearGradient>
        <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a4048" />
          <stop offset="1" stopColor="#1a1d21" />
        </linearGradient>
        <linearGradient id={`${uid}-accent`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
        <linearGradient id={`${uid}-steel`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7FA8C9" />
          <stop offset="1" stopColor="#4a7a9e" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="35%" r="60%">
          <stop offset="0" stopColor="#FF6A00" stopOpacity="0.22" />
          <stop offset="1" stopColor="#FF6A00" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="500" fill={`url(#${uid}-bg)`} />
      {renderDecor(variant, uid)}

      {/* Силуэт оборудования */}
      <g transform="translate(400 300)">{renderMachine(variant, uid)}</g>

      {/* Подпись серии */}
      {label && (
        <text
          x="40"
          y="460"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="600"
          letterSpacing="2"
          fill="#7FA8C9"
          opacity="0.85"
        >
          {label.toUpperCase()}
        </text>
      )}
    </svg>
  )
}

function renderDecor(variant: PlaceholderVariant, uid: string) {
  return (
    <>
      <rect width="800" height="500" fill={`url(#${uid}-glow)`} />
      {/* Тех-сетка */}
      <g stroke="#5b8db8" strokeOpacity="0.09" strokeWidth="1">
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="500" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="800" y2={i * 48} />
        ))}
      </g>
      {/* Искры/стружка для сцен обработки */}
      {(variant === 'turn' || variant === 'mill' || variant === 'grind' || variant === 'hero') && (
        <g fill="#FF8A3D" opacity="0.85">
          {[
            [430, 250], [470, 235], [510, 258], [445, 210], [488, 200],
            [520, 225], [560, 240], [460, 275],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} opacity={0.5 + (i % 4) * 0.12} />
          ))}
        </g>
      )}
    </>
  )
}

function renderMachine(variant: PlaceholderVariant, uid: string) {
  const metal = `url(#${uid}-metal)`
  const accent = `url(#${uid}-accent)`
  const steel = `url(#${uid}-steel)`

  switch (variant) {
    case 'hero':
    case 'turn':
      return (
        <g>
          {/* Станина */}
          <rect x="-300" y="40" width="600" height="60" rx="6" fill={metal} />
          <rect x="-280" y="10" width="560" height="34" rx="4" fill="#2e333a" />
          {/* Закрытая кабина */}
          <rect x="-180" y="-150" width="360" height="170" rx="10" fill="#23272d" stroke="#3a4048" />
          <rect x="-150" y="-125" width="240" height="120" rx="6" fill="#0f1114" />
          {/* Экран ЧПУ */}
          <rect x="110" y="-115" width="50" height="70" rx="5" fill={steel} opacity="0.85" />
          <rect x="118" y="-105" width="34" height="10" rx="2" fill="#0f1114" opacity="0.6" />
          <rect x="118" y="-90" width="34" height="6" rx="2" fill="#0f1114" opacity="0.4" />
          {/* Патрон и шпиндель */}
          <circle cx="-40" cy="-60" r="42" fill={accent} />
          <circle cx="-40" cy="-60" r="22" fill="#0f1114" />
          <rect x="0" y="-70" width="120" height="16" rx="4" fill={metal} />
          {/* Дверь кабины */}
          <rect x="-150" y="-125" width="110" height="120" rx="6" fill={steel} opacity="0.12" />
        </g>
      )
    case 'mill':
      return (
        <g>
          <rect x="-300" y="50" width="600" height="54" rx="6" fill={metal} />
          {/* Колонна */}
          <rect x="-120" y="-230" width="90" height="280" rx="8" fill="#23272d" stroke="#3a4048" />
          {/* Шпиндельная головка */}
          <rect x="-70" y="-180" width="180" height="70" rx="8" fill={metal} />
          <rect x="20" y="-120" width="34" height="90" rx="4" fill={steel} />
          {/* Инструмент */}
          <polygon points="28,-30 46,-30 37,20" fill={accent} />
          {/* Стол с заготовкой */}
          <rect x="-160" y="10" width="260" height="22" rx="4" fill={steel} opacity="0.7" />
          {/* Поворотный стол 5 осей */}
          <ellipse cx="-40" cy="10" rx="60" ry="16" fill={accent} opacity="0.9" />
          <ellipse cx="-40" cy="6" rx="30" ry="8" fill="#0f1114" opacity="0.5" />
        </g>
      )
    case 'grind':
      return (
        <g>
          <rect x="-300" y="46" width="600" height="58" rx="6" fill={metal} />
          {/* Шлифовальный круг */}
          <circle cx="60" cy="-70" r="70" fill={metal} stroke="#3a4048" />
          <circle cx="60" cy="-70" r="42" fill="#2e333a" />
          <circle cx="60" cy="-70" r="12" fill={accent} />
          {/* Стол с гидравликой */}
          <rect x="-260" y="6" width="360" height="20" rx="4" fill={steel} opacity="0.75" />
          {/* Заготовка */}
          <rect x="-180" y="-30" width="140" height="36" rx="6" fill="#3a4048" />
          {/* Искры */}
          <g fill={accent}>
            <circle cx="10" cy="-40" r="4" />
            <circle cx="-6" cy="-30" r="3" />
            <circle cx="24" cy="-24" r="3" />
          </g>
        </g>
      )
    case 'edm':
      return (
        <g>
          <rect x="-300" y="50" width="600" height="54" rx="6" fill={metal} />
          {/* Ванна с диэлектриком */}
          <rect x="-220" y="-40" width="360" height="90" rx="8" fill={steel} opacity="0.35" />
          <rect x="-210" y="-30" width="340" height="70" rx="6" fill="#0f1114" opacity="0.6" />
          {/* Проволока */}
          <line x1="-30" y1="-220" x2="-30" y2="30" stroke={accent} strokeWidth="3" />
          <line x1="-30" y1="-220" x2="-30" y2="-40" stroke="#7FA8C9" strokeWidth="2" />
          {/* Верхняя/нижняя направляющие */}
          <rect x="-70" y="-200" width="80" height="18" rx="4" fill={metal} />
          <rect x="-70" y="10" width="80" height="18" rx="4" fill={metal} />
          {/* Заготовка с прорезью */}
          <rect x="-120" y="-90" width="180" height="80" rx="6" fill="#3a4048" stroke="#2e333a" />
        </g>
      )
    case 'workshop':
      return (
        <g>
          {/* Цех: несколько станков в перспективе */}
          {[-260, -60, 140].map((x, i) => (
            <g key={x} transform={`translate(${x} 0) scale(${i === 1 ? 1.12 : 0.95})`}>
              <rect x="0" y="40" width="180" height="24" rx="4" fill={metal} />
              <rect x="20" y="-40" width="140" height="80" rx="6" fill="#23272d" stroke="#3a4048" />
              <rect x="40" y="-24" width="70" height="50" rx="4" fill="#0f1114" />
              <rect x="120" y="-20" width="24" height="34" rx="3" fill={i === 1 ? accent : steel} opacity="0.85" />
            </g>
          ))}
          {/* Верхний кран */}
          <rect x="-320" y="-200" width="640" height="10" fill="#2e333a" />
          <rect x="-40" y="-190" width="8" height="60" fill={accent} />
        </g>
      )
    default:
      return null
  }
}