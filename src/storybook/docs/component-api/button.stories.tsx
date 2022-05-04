import Button from '../../../lib/components/button'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: '📕 Component API/Button',
  component: Button,
  args: {
    onClick: () => {
      alert('Clicked!')
    },
  },
  argTypes: {
    onClick: {
      control: false,
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    type: {
      control: {
        type: 'radio',
        options: ['submit', 'reset', 'button'],
      },
      defaultValue: 'button',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Submit',
}

export const WithDisabledInteractions = Template.bind({})

WithDisabledInteractions.args = {
  ...Default.args,
  disabled: true,
}
