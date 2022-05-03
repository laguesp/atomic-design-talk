import Button from '../../../lib/components/button'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={() => alert('Clicked!')} />
)

export const Default = Template.bind({})

Default.args = {
  children: 'Accept',
  disabled: false,
}

export const WithDisabledInteractions = Template.bind({})

WithDisabledInteractions.args = {
  children: 'Submit',
  disabled: true,
}
