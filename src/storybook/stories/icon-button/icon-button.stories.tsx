import { Alarm, AlignTop, MagnifyingGlass, Trash } from 'phosphor-react'
import IconButton from '../../../lib/components/icon-button'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      options: [
        'Alarm Icon',
        'Align Top Icon',
        'Magnifying Glass Icon',
        'Trash Icon',
      ],
      mapping: {
        'Alarm Icon': Alarm,
        'Align Top Icon': AlignTop,
        'Magnifying Glass Icon': MagnifyingGlass,
        'Trash Icon': Trash,
      },
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} onClick={() => alert('Clicked!')} />
)

export const Default = Template.bind({})

Default.args = {
  icon: MagnifyingGlass,
  disabled: false,
}

export const WithDisabledInteractions = Template.bind({})

WithDisabledInteractions.args = {
  icon: MagnifyingGlass,
  disabled: true,
}
