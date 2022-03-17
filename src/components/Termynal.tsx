import React, { Children, useEffect, useState } from "react"
import Line from "../interfaces/Line";
import "../styles/Termynal.css"
import ThermynalContext from "../contexts/TermynalContext";

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

const Termynal = ({id = "termynal", options = defaultOptions, children}: TermynalProps) => {
    const lines: Line[] = []

    useEffect(() => {
        for (const line of lines) {
            line.show()
        }
    }, [])
    return (
        <div className={"termynalContainer"} id={id}>
            <div className={"termynalInnerContainer"}>
                <ThermynalContext.Provider value={{
                    addLine: (line: Line) => lines.push(line)
                }}>
                    { children }
                </ThermynalContext.Provider>
            </div>
        </div>
    )
}

export default Termynal