import React, { Children, useEffect, useState } from "react"
require("./Termynal.css")

type TermynalProps = {
    id: string,
    options: {
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

interface Line {
    hide: () => null,
    show: () => Promise<null>
}

const defaultOptions = {
    startDelay: 600,
    typeDelay: 90,
    lineDelay: 1500,
    progressLength: 40,
    progressChard: '█',
    progressPercent: 100,
    cursor: '▋',
    autoScrole: true
}

async function _wait(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const TermynalContext = React.createContext({
    lines: [],
    addLine: () => {}
})

const Termynal = ({id = "termynal", options = defaultOptions, children}: TermynalProps) => {
    const lines: Line[] = []
    const addLine = (line: Line) => lines.push(line)

    return (
        <div className={"termynalContainer"} id={id}>
            <div className={"termynalInnerContainer"}>
                { children }
            </div>
        </div>
    )
}

export default Termynal