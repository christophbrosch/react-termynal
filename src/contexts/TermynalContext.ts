import React from "react"
import TermynalContextProps from "../types/TermynalContextProps"

const TermynalContext = React.createContext<Partial<TermynalContextProps>>({})

export default TermynalContext