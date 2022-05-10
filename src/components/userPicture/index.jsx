import React from "react"
import { Container, ProfilePicture} from "./style"

const UserPicture = props => {
  return(
    <Container>
      <ProgilePicture src={props.url} alt={props.alternative}/>
    </Container>
  )
}

export default UserPicture
