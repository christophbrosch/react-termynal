import React, { useContext, useEffect, useState } from "react"
import { ReactNode } from "react"
import TermynalContext from "../contexts/TermynalContext"

type PlainProps = {
    lineNumber: number | null,
    children: ReactNode,
}

const Plain = ({lineNumber = null, children}: PlainProps) => {
    const [hidden, setHidden] = useState(true)
    const context = useContext(TermynalContext)

    useEffect(() => {
        context.addLine!({type: "plain", hide, show})
    })

    const hide = () => setHidden(true)
    const show = async () => {
        return (
            new Promise<null>((resolve, reject) => {
                setHidden(false)
                resolve(null)
            })
        )
    }

    // TODO: THIS MESS
    return (
        <div style={{display: "flex", alignItems: "center"}}>  
            { lineNumber &&
                <span 
                    className="unselectable" 
                    style={{marginRight: "2rem", fontWeight: "lighter", color: "gray"}
                }>
                    {lineNumber}
                    {lineNumber.toString().length === 1 && <>&nbsp;</>} 
                </span> 
            }   
            {!hidden && <>{children}</>}
        </div>
    )
} 

export default Plain