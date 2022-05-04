import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps {
  /** The content of the button. It should be [a valid HTML5 button content category](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) or a react element with valid content.*/
  children: ReactNode
  /** Additional classes to override button styles. Added next to ".improving-button" class. */
  className?: ButtonAttributes['className']
  /** If `true`, the button is disabled. */
  disabled?: ButtonAttributes['disabled']
  /** Callback fired when the component is clicked. */
  onClick?: ButtonAttributes['onClick']
  /** Type of the `button` element. If provided, it should be [a valid HTML5 button type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type). */
  type?: ButtonAttributes['type']
}
