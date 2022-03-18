import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Termynal from "../components/Termynal";
import Plain from "../components/Plain";

export default {
    title: "ReactComponentLibrary/Termynal",
    component: Termynal,
} as ComponentMeta<typeof Termynal>;

const Template: ComponentStory<typeof Termynal> = (args) => {
    const [counter, setCounter] = useState(5)

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1)
        }, 2000)
    })
    return (
        <div style={{position: "relative"}}>
            <Termynal {...args}>
                { //@ts-ignore
                    [...Array(counter).keys()].map((line) => {
                        return (
                            <Plain lineNumber={line + 1} key={line}>
                                <span> hi </span>
                            </Plain>
                        )
                    })
                }
            </Termynal>
        </div>
    )
}


export const basic = Template.bind({});

basic.args = {
}