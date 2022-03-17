import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Termynal from "../components/Termynal";
import Plain from "../components/Plain";

export default {
    title: "ReactComponentLibrary/Termynal",
    component: Termynal,
} as ComponentMeta<typeof Termynal>;

const Template: ComponentStory<typeof Termynal> = (args) => 
    <Termynal {...args}>
    </Termynal>

export const basic = Template.bind({});

basic.args = {
    id:"Hello",
}