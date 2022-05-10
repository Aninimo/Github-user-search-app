import React from "react"
import Home from "./pages/home"
import { ContextProvider } from "./context"

import "./style.css"

export default function App(){
  return(
    <>
     <ContextProvider>
      <Home/>
     </ContextProvider>
    </>
  )
}
