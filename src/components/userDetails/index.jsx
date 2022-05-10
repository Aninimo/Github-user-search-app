import React from "react"
import { Container, Name, UserName, Details } from "./style"

const UserDetails = props => {
  return(
    <Container>
      <Name>{props.name}</Name>
      <UserName>{props.login}</UserName>
      <Details>{props.bio}</Details>
    </Container>
  )
}

export default UserDetails
