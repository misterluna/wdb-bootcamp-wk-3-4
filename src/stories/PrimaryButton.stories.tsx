import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PrimaryButton",
  component: PrimaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Primary",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  label: "Primary",
};
