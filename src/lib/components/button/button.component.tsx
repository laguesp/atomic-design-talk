import './button.styles.css'

import { forwardRef } from 'react'

import type { ButtonProps } from './button.types'
import type { Ref, ReactElement } from 'react'

const Button = (
  { children, className, ...props }: ButtonProps,
  ref?: Ref<HTMLButtonElement>
): ReactElement => {
  return (
    <button
      className={`improving-button ${className}`}
      ref={ref}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}

export default forwardRef<HTMLButtonElement, ButtonProps>(Button)
