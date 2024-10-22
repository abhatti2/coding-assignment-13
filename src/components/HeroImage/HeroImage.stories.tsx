import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundImage: { control: 'text' },
    text: { control: 'text' },
    disabled: { control: 'boolean' }, // Add control for disabled state
  },
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImage: 'https://via.placeholder.com/800x300',
  text: 'Hero Image Text',
  disabled: false, // Default state
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundImage: 'https://via.placeholder.com/800x300',
  text: 'Hero Image is Disabled',
  disabled: true, // Disabled state
};
