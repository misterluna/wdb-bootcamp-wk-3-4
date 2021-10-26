import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hint } from './Hint';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Hint',
  component: Hint,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Hint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hint> = args => <Hint {...args} />;

export const Icon = Template.bind({});
Icon.args = {};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
};
