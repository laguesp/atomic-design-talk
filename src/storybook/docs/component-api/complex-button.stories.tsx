import {
  ArrowCircleUpRight,
  CaretDoubleLeft,
  Printer,
  PictureInPicture,
} from 'phosphor-react'
import ButtonStoryMeta from './button.stories'
import ComplexButton from '../../../lib/components/complex-button'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: '📕 Component API/ComplexButton',
  component: ComplexButton,
  args: {
    onClick: () => {
      alert('Clicked!')
    },
  },
  argTypes: {
    ...ButtonStoryMeta.argTypes,
  },
} as ComponentMeta<typeof ComplexButton>

const Template: ComponentStory<typeof ComplexButton> = (args) => (
  <ComplexButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  children: 'Submit',
}

export const WithDisabledInteractions = Template.bind({})

WithDisabledInteractions.args = {
  ...Default.args,
  disabled: true,
}

export const WithIconOnTheRightSide = Template.bind({})

WithIconOnTheRightSide.args = {
  ...Default.args,
  children: 'Open docs',
  right: { icon: ArrowCircleUpRight, alt: 'Open docs on another page' },
}

export const WithIconOnTheLeftSide = Template.bind({})

WithIconOnTheLeftSide.args = {
  ...Default.args,
  children: 'Get back',
  left: { icon: CaretDoubleLeft, alt: 'Go back to previous page' },
}

export const WithTextOnTheLeftSideAndIconOnTheRightSide = Template.bind({})

WithTextOnTheLeftSideAndIconOnTheRightSide.args = {
  ...Default.args,
  children: 'Open docs',
  left: 'ENG',
  right: { icon: ArrowCircleUpRight, alt: 'Open english docs on another page' },
}

export const WithIconOnBothSides = Template.bind({})

WithIconOnBothSides.args = {
  ...Default.args,
  children: 'Print this page',
  left: { icon: Printer, alt: 'Print this page' },
  right: { icon: PictureInPicture, alt: 'Open print pop-up window' },
  spacing: { left: 1 },
}
