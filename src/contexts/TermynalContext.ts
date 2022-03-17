import React from "react"
import Line from "../interfaces/Line"

const TermynalContext = React.createContext({
    addLine: (line: Line) => {},
    typeDelay: 90,
    progressChard: '█',
    cursor: '▋'
})

export default TermynalContext