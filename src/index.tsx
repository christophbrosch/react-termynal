import React from "react";
import { ReactComponentElement, ReactNode, useEffect, useState } from "react";
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
        cursor: ReactNode
    },
    children?: any
}

export const Termynal = (props: TermynalProps) => {

    return (
        <div id={props.id} data-termynal>
            {props.children}
        </div>
    )
}
