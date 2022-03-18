import React, { useEffect } from "react"
import Line from "../interfaces/Line";
import "../styles/Termynal.css"
import ThermynalContext from "../contexts/TermynalContext";
import TermynalProps from "../types/TermynalProps";

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

const Termynal = ({id = "termynal", name = "bash", options = defaultOptions, children}: TermynalProps) => {
    const lines: Line[] = []

    useEffect(() => {
        (async () => {
            for (const line of lines) {
                if (line.type === "plain") {
                    line.show()
                }
            }
        })()
    })

    return (
        <div className="termynal" id={id}>
            <div className="termynal__header">
                <div className="termynal__dots"/>
                <div className="termynal__bash unselectable">
                    { name }
                </div>
            </div>
            <div className="termynal__inner">
                <ThermynalContext.Provider value={{
                    addLine: (line: Line) => {
                        lines.push(line)
                        return null
                    },
                    typeDelay: options.typeDelay,
                    cursor: options.cursor
                }}>
                    { children }
                </ThermynalContext.Provider>
            </div>
        </div>
    )
}

export default Termynal