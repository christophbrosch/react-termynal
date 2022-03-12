import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Termynal } from ".";

export default {
    title: "ReactComponentLibrary/Termynal",
    component: Termynal,
} as ComponentMeta<typeof Termynal>;

const Template: ComponentStory<typeof Termynal> = (args) => <Termynal {...args} />

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  id: "#123",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  id: "Click me!",
};
