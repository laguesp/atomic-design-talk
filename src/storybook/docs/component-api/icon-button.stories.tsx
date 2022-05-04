import { Alarm, AlignTop, MagnifyingGlass, Trash } from 'phosphor-react'
import ButtonStoryMeta from './button.stories'
import IconButton from '../../../lib/components/icon-button'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

const iconMapping = { Alarm, AlignTop, MagnifyingGlass, Trash }

export default {
  title: '📕 Component API/IconButton',
  component: IconButton,
  args: {
    onClick: () => {
      alert('Clicked!')
    },
  },
  argTypes: {
    ...ButtonStoryMeta.argTypes,
    alt: {
      control: 'text',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          Alarm: 'Alarm Icon',
          AlignTop: 'Align Top Icon',
          MagnifyingGlass: 'Magnifying Glass Icon',
          Trash: 'Trash Icon',
        },
      },
      options: Object.keys(iconMapping),
      mapping: iconMapping,
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  icon: MagnifyingGlass,
}

export const WithDisabledInteractions = Template.bind({})

WithDisabledInteractions.args = {
  ...Default.args,
  disabled: true,
}
