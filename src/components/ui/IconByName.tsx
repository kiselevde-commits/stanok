import type { ComponentType, SVGProps } from 'react'
import {
  IconAward,
  IconCalculator,
  IconClock,
  IconFactory,
  IconFileText,
  IconGear,
  IconLayers,
  IconShield,
  IconTruck,
  IconWrench,
} from './Icons'

type Name =
  | 'shield'
  | 'layers'
  | 'wrench'
  | 'clock'
  | 'factory'
  | 'gear'
  | 'award'
  | 'file'
  | 'calculator'
  | 'truck'

/** Сопоставление строкового ключа из данных с SVG-иконкой. */
export default function IconByName({ name, ...rest }: { name: Name } & SVGProps<SVGSVGElement>) {
  const map: Record<Name, ComponentType<SVGProps<SVGSVGElement>>> = {
    shield: IconShield,
    layers: IconLayers,
    wrench: IconWrench,
    clock: IconClock,
    factory: IconFactory,
    gear: IconGear,
    award: IconAward,
    file: IconFileText,
    calculator: IconCalculator,
    truck: IconTruck,
  }
  const Cmp = map[name] ?? IconGear
  return <Cmp {...rest} />
}