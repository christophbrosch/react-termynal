import React, { useState } from "react"
import { ReactNode } from "react"

type PlainProps = {
    children: ReactNode,
}

const Plain = ({children}: PlainProps) => {
    const [hidden, setHidden] = useState(true)
    
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