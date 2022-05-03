import type { ButtonProps } from '../button'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { IconProps } from 'phosphor-react'

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  /**
   * Icon
   */
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}
