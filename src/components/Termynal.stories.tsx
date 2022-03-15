import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Termynal from "./Termynal";
import Plain from "./Plain";

export default {
    title: "ReactComponentLibrary/Termynal",
    component: Termynal,
} as ComponentMeta<typeof Termynal>;

const Template: ComponentStory<typeof Termynal> = (args) => 
    <Termynal {...args}>
        <Plain><p>Hello</p></Plain>
        <Plain><p>Hello</p></Plain>
    </Termynal>

export const basic = Template.bind({});

basic.args = {
    id:"Hello",
}