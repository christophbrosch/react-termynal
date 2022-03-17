import Line from "../interfaces/Line"

type TermynalContextProps = {
    addLine: (line: Line) => null,
    getLineNumber: () => null | number
    typeDelay: number
    cursor: string
}

export default TermynalContextProps
