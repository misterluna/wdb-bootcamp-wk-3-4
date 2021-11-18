import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MilestoneCard } from './MilestoneCard';
import { Tag } from './Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MilestoneCard',
  component: MilestoneCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MilestoneCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MilestoneCard> = args => (
  <MilestoneCard {...args} />
);

export const Large = Template.bind({});
Large.args = {
  title: 'Milestone 1: User Experience Audit',
  tags: [<Tag variant="tagLg" type="full" label="UI/UX" key={1} />],
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus diam duis liber non venenatis, lobortis sed. Bibendum malesuada amet et mauris ornare ac nulla fermentum. A eget faucibus purus tristique fames velit sit at mollis. Vulputate potenti risus, dui aliquam sed sit. Morbi enim ipsum sed bibendum. Vel lacus tortor mi tortor aenean enim massa tincidunt. Sit eget ut egestas in integer volutpat posuere. Consectetur tincidunt sed egestas semper gravida porta. Faucibus ipsum dignissim scelerisque risus pellentesque. Nibh molestie ipsum fringilla tempor integer. Id cursus pharetra sapien turpis est nibh et. Elementum cursus diam sem lacus velit vivamus et congue. Enim aliquet et ultrices in donec. Viverra a cursus in amet non facilisi blandit adipiscing.',
  hintSize: 'icon',
};
