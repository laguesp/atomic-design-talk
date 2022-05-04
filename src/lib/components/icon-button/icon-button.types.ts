import type { ButtonProps } from '../button'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { IconProps } from 'phosphor-react'

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  /** Icon component from the phosphor-react library. */
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  /** Accessible alt attribute for the icon svg. */
  alt?: string
}
