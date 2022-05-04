import type { ButtonProps } from '../button'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { IconProps } from 'phosphor-react'

type PhosphorIconComponent = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  /** Icon component from the phosphor-react library. */
  icon: PhosphorIconComponent
  /** Accessible alt attribute for the icon svg. */
  alt?: string
}
