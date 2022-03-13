import React from "react";
import { ReactComponentElement, ReactNode, useEffect, useState } from "react";
import { default as TermynalClass } from "./termynal";
import { Typography, TypographyProps } from "@mui/material";
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
        cursor: ReactNode
    },
    children?: any
}

const Termynal = (props: TermynalProps) => {

    useEffect(() => {
        new TermynalClass("#" + props.id)
    }, [])

    return (
        <div 
          id={props.id} 
          data-termynal 
          style={{
            height: "100%",
            width: "100%",
            overflow: "scroll",
          }}>
            {props.children}
        </div>
    )
}

type TermynalLineProps = {
    type: "window" | "input" | "plain" | "progress",
    prompt?: string,
    content?: any,
    options?: TypographyProps
}

const Line = ({type, prompt, content, options}: TermynalLineProps) =>{ 
    return (
        <Typography
            data-ty={type}
            data-prompt={prompt}
            {...options}
        >
            {content}
        </Typography>
    )
}

type ContentType = {
    content: string,
    options?: TypographyProps
}
const Input = ({content, options}: ContentType) => <Line type="input" prompt="$" content={content} options={options}/>
const Plain = ({content, options}: ContentType) => <Line type="plain" content={content} options={options}/>

export {
    Termynal,
    Line,
    Input,
    Plain,
}