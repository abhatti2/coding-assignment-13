import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    disabled: { control: 'boolean' }, // Add control for disabled state
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  disabled: false, // Default state
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  disabled: true, // Disabled state
};
