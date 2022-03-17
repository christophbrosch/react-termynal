interface Line {
    type: string,
    hide: () => void,
    show: () => Promise<null>
}

export default Line