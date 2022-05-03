import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'disabled' | 'onClick' | 'type'
>

export interface ButtonProps extends ButtonAttributes {
  /**
   * Children
   */
  children: ReactNode
}
