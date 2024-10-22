import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' }, // Add control for disabled state
  },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/400x200',
  alt: 'Placeholder Image',
  width: '400px',
  height: '200px',
  disabled: false, // Default state
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/400x200',
  alt: 'Disabled Image',
  width: '400px',
  height: '200px',
  disabled: true, // Disabled state
};
