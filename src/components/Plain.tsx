import React, { useState } from "react"
import { ReactNode } from "react"
import Line from "./Line"

type PlainProps = {
    children: ReactNode,
    active: boolean
}

const Plain = ({active = false, children}: PlainProps) => {
    const [done, setDone] = useState(false)
    const ref = React.createRef()
    
    const render = async () => {
        if (active) {
            new Promise<null>((resolve, reject) => {
                setDone(true)
                resolve(null)
            })
        }
    }

    return (
        <Line ref={ref} type="plain"> {children}</Line>
    )
} 

export default Plain