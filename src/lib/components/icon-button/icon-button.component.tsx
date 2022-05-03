import './icon-button.styles.css'

import { forwardRef } from 'react'
import Button from '../button'

import type { IconButtonProps } from './icon-button.types'
import type { ReactElement, Ref } from 'react'

const IconButton = (
  { icon: Icon, ...props }: IconButtonProps,
  ref?: Ref<HTMLButtonElement>
): ReactElement => {
  return (
    <Button ref={ref} className='improving-icon-button' {...props}>
      <Icon weight='bold' />
    </Button>
  )
}

export default forwardRef<HTMLButtonElement, IconButtonProps>(IconButton)
