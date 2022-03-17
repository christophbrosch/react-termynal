import React, { useContext, useEffect, useState } from "react"
import { ReactNode } from "react"
import TermynalContext from "../contexts/TermynalContext"

type PlainProps = {
    children: ReactNode,
}

const Plain = ({children}: PlainProps) => {
    const [hidden, setHidden] = useState(true)
    const context = useContext(TermynalContext)
    const [lineNumber, setLineNumber] = useState<number | null>(null)

    useEffect(() => {
        context.addLine!({type: "plain", hide, show})
        setLineNumber(context.getLineNumber!())
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
        <div style={{display: "flex", alignItems: "center"}}>  
            {lineNumber !== null ? 
                <span className="unselectable" 
                    style={{marginRight: "2rem", fontWeight: "lighter", color: "gray"}}>{lineNumber}</span> : <></> }
            {hidden ? <></>: <>{children}</> }
        </div>
    )
} 

export default Plain