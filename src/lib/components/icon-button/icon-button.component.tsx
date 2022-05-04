import './icon-button.styles.css'

import { forwardRef } from 'react'
import Button from '../button'
import clsx from 'clsx'

import type { IconButtonProps } from './icon-button.types'
import type { ReactElement } from 'react'

/**
 * This component is just a wrapper around the `Button` component.
 *
 * You have to provide one of the icons available on the `phosphor-react` package on the `icon` prop, and this will be injected as the content for the `Button` component.
 *
 * You can optionally pass an `alt` prop to make the icon svg accessible.
 * */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref): ReactElement => {
    const classNameString = clsx('improving-icon-button', props.className)

    return (
      <Button
        className={classNameString}
        disabled={props.disabled}
        onClick={props.onClick}
        ref={ref}
        type={props.type}
      >
        <props.icon weight='bold' alt={props.alt} />
      </Button>
    )
  }
)

IconButton.defaultProps = Button.defaultProps

export default IconButton
