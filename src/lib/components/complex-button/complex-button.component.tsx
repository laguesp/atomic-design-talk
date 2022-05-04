import './complex-button.styles.css'

import { forwardRef } from 'react'
import Button from '../button'
import clsx from 'clsx'

import type {
  ComplexButtonProps,
  SecondaryContent,
  Spacing,
} from './complex-button.types'
import type { ReactElement, ReactNode } from 'react'

/**
 * This component is just a wrapper around the `Button` component.
 *
 * You can pass any value to the `children` prop that the Button component accepts and optionally, secondary content for the left, right or both sides. The secondary content can be a `string` to render secondary text or you can pass an `object` to render an icon.
 *
 * By default, if the secondary content is text, it'll have a 1x spacing to the primary content. The icons will have 4x spacing to the primary content. You can override this behavior by passing an optional `spacing` prop.
 * */
export const ComplexButton = forwardRef<HTMLButtonElement, ComplexButtonProps>(
  (props, ref): ReactElement => {
    const classNameString = clsx('with-complex-content', props.className)

    return (
      <Button
        className={classNameString}
        disabled={props.disabled}
        onClick={props.onClick}
        ref={ref}
        type={props.type}
      >
        {renderSecondaryContent('left', props.spacing, props.left)}
        <div className='primary-content'>{props.children}</div>
        {renderSecondaryContent('right', props.spacing, props.right)}
      </Button>
    )
  }
)

const renderSecondaryContent = (
  side: 'left' | 'right',
  spacing?: Spacing,
  content?: SecondaryContent
): ReactNode | null => {
  if (!content) {
    return null
  }

  const spacingClassName = spacing?.[side]
    ? `with-${spacing[side]}x-spacing`
    : null

  if (typeof content === 'string') {
    return (
      <div
        className={`secondary-content with-text with-${side}-position ${
          spacingClassName ? spacingClassName : ''
        }`}
      >
        {content}
      </div>
    )
  }

  if ('icon' in content) {
    return (
      <div
        className={`secondary-content with-icon with-${side}-position ${
          spacingClassName ? spacingClassName : ''
        }`}
      >
        <content.icon weight='bold' alt={content.alt} />
      </div>
    )
  }

  return null
}

ComplexButton.defaultProps = Button.defaultProps

export default ComplexButton
