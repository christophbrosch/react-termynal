import React, { ReactNode } from "react"

type LineProps = {
    type: "plain" | "input",
    children: ReactNode,
    reference: any
}

const Line = React.forwardRef((props: LineProps) => {
    return (
        <>
            {props.children}
        </>
    )
}) 

export default Line