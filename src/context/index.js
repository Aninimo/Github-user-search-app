import React from "react"
import React, { useState, useContext} from "react"

export const context = createContext()

export const contextProvider = props => {
  const[userData,setUserData] = ({})

  return(
    <context.Provider value={{
      userData,
      setUserData 
    }}>
      {props.children}
    </context.Provider>
  )
}
