type TermynalProps = {
    id: string,
    name: string,
    options?: {
        startDelay: number,
        typeDelay: number,
        lineDelay: number,
        progressLength: number,
        progressChard: string,
        progressPercent: number,
        cursor: string,
        autoScrole: boolean,
        isLineNumberEnabled: boolean
    },
    children?: React.ReactNode
}

export default TermynalProps