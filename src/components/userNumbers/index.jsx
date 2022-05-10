import React from "react"
import { Container, NumberContainer} from "./style"

const UserNumbers = props => {
  return(
    <Container>
      <NumberContainer>
        <h1>{props?.repos}</h1>
        <h2>Reositórios</h2>
      </NumberContainer>

      <NumberConteiner>
        <h1>{props?.followers}</h1>
        <h2>Seguidores</h2>
      </NumberContainer>

      <NumberContainer>
        <h1>{props?.following}</h1>
        <h2>Seguindo</h2>
      </NumberContainer>
    </Container>
  )
}

export default UserNumbers
