import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    disabled: { control: 'boolean' }, // Add control for disabled state
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  body: 'This is the card body content. You can modify the content using the Storybook controls.',
  disabled: false, // Default state
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card Title',
  body: 'This card is disabled and cannot be interacted with.',
  disabled: true, // Disabled state
};
