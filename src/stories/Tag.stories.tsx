import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  type: 'icon',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Tag Name',
  type: 'text',
};

export const Full = Template.bind({});
Full.args = {
  label: 'Tag Name',
  type: 'full',
};
