import * as React from "react";
import { default as TermynalClass } from "./termynal";
import "./termynal.css";

type TermynalProps = {
    id: string,
    options?: {
        startDelay: number,
        typeDelay: number,
        lineDelay: number,
        progressLength: number,
        progressChard: string,
        progressPercent: number,
        cursor: React.ReactNode,
        autoScrole: boolean
    },
    children?: any
}


type TermynalLineProps = {
    type: "window" | "input" | "plain" | "progress",
    prompt?: string,
    children?: any,
}

type ContentType = {
    children: React.ReactNode,
    prompt?: string,
}

const Termynal = (props: TermynalProps) => {

    React.useEffect(() => {
        /* tslint:disable:no-unused-expression */
        new TermynalClass("#" + props.id)
    }, [])

    return (
            <div 
            id={props.id} 
            data-termynal 
            style={{
                height: "100%",
                width: "100%",
            }}>
                {props.children}
            </div>
    )
}

const Line = ({type, prompt, children}: TermynalLineProps) =>{ 
    return (
        <span
            data-ty={type}
            data-ty-prompt={prompt}
            >
                {children}
        </span>
    )        
}

const Input = ({children, prompt}: ContentType) => 
    <Line type="input" prompt={prompt} children={children}/>
const Plain = ({children, prompt}: ContentType) => 
    <Line type="plain" prompt={prompt} children={children}/>

export {
    Termynal,
    Line,
    Input,
    Plain,
}