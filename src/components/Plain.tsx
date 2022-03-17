import React, { useContext, useEffect, useState } from "react"
import { ReactNode } from "react"
import TermynalContext from "../contexts/TermynalContext"

type PlainProps = {
    children: ReactNode,
}

const Plain = ({children}: PlainProps) => {
    const [hidden, setHidden] = useState(true)
    const context = useContext(TermynalContext)

    useEffect(() => {
        context.addLine({hide: hide, show: show})
        console.log()
    }, [])

    const hide = () => setHidden(true)
    const show = async () => {
        return (
            new Promise<null>((resolve, reject) => {
                setHidden(false)
                resolve(null)
            })
        )
    }

    return (
        hidden ? <></>: children
    )
} 

export default Plain