import type { ButtonProps } from '../button'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { IconProps } from 'phosphor-react'

type PhosphorIconComponent = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>

export interface Spacing {
  /** Spacing factor for the `left` side of the primary content. The allowed values are 1, 2, 3 or 4.*/
  left?: number
  /** Spacing factor for the `right` side of the primary content. The allowed values are 1, 2, 3 or 4.*/
  right?: number
}

export type SecondaryContent =
  | string
  | { icon: PhosphorIconComponent; alt?: string }

export interface ComplexButtonProps extends ButtonProps {
  /** Secondary content on the `left` side. The secondary content can be a `string` to render secondary text or you can pass an `object` to render an icon. */
  left?: SecondaryContent
  /** Secondary content on the `right` side. The secondary content can be a `string` to render secondary text or you can pass an `object` to render an icon. */
  right?: SecondaryContent
  /** Spacing options for the primary content passed as `children`. */
  spacing?: Spacing
}
