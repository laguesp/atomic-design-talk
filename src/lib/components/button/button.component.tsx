import './button.styles.css'

import { forwardRef } from 'react'
import clsx from 'clsx'

import type { ButtonProps } from './button.types'

/**
 * This component is just a wrapper around the HTML `button` element, providing the basic styles for all the buttons on the app.
 *
 * This component is not responsible for managing the content. Whatever you provide as `children` should be [a valid HTML5 button content category](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) or a react element with valid content.
 *
 * The only styles applied to the content are `font-family`, `font-size`, `font-weight`, `text-transform` and `color`.
 * */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const classNameString = clsx('improving-button', props.className)

    return (
      <button
        className={classNameString}
        disabled={props.disabled}
        onClick={props.onClick}
        ref={ref}
        type={props.type}
      >
        {props.children}
      </button>
    )
  }
)

Button.defaultProps = {
  disabled: false,
  type: 'button',
}

export default Button
