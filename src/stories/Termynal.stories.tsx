import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Termynal from "../components/Termynal";
import Plain from "../components/Plain";

export default {
    title: "ReactComponentLibrary/Termynal",
    component: Termynal,
} as ComponentMeta<typeof Termynal>;

const Template: ComponentStory<typeof Termynal> = (args) => 
    <div style={{position: "relative"}}>
        <Termynal {...args}>
            <Plain>
                <p> Hi </p>
            </Plain>
            <Plain>
                <p> Hi </p>
            </Plain>
            <Plain>
                <p> Hi </p>
            </Plain>
            <Plain>
                <p> Hi </p>
            </Plain>
            <Plain>
                <p> Hi </p>
            </Plain>
            <Plain>
                <p> Hi </p>
            </Plain>
            <Plain>
                <p> Hi </p>
            </Plain>
        </Termynal>
    </div>

export const basic = Template.bind({});

basic.args = {
    id:"Hello",
    options: {
        startDelay: 600,
        typeDelay: 90,
        lineDelay: 1500,
        progressLength: 40,
        progressChard: '█',
        progressPercent: 100,
        cursor: '▋',
        autoScrole: true,
        isLineNumberEnabled: true
    }
}