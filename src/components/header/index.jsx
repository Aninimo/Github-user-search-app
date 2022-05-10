import React from "react"
import React, { useState, useContext } from "react"
import { HeaderContainer, HeaderInput, ButtonSearch } from "./style"

import { context } from "../../context"
import client from "../../services/client"

const Header = () => {
  const[searchedValue,setSearchedValue] = useState('') 
  const ctx = useContext(create)

  async function getUserData(){
    try{
      const response = await client.get(`/${searchedValue}`)
      ctx.useContext(context)
    }catch(err){
       console.log(err)
    }
  }

  return(
    <HeaderContainer>
     <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} placeholder="Search Github username"/>
     <ButtonSearch onClick={getUserData}>Search</ButtonSearch>
    </HeaderContainer>
  )
}

export default Header
