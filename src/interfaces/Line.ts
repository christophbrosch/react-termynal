interface Line {
    hide: () => void,
    show: () => Promise<null>
}

export default Line