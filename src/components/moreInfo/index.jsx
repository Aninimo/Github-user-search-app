import React from "react"
import { ImLocation, ImTwitter, ImMail, ImOffice } from "react-icons/im"
import { Container } from "./style"


const MoreInfo = props => {
  return(
    <Container>
      <ul>
        <li><ImLocation/> {props.locat}</li>
     
        <li><ImTwitter/> {props.twitter}</li>
      
        <li><ImMail/> {props.email}</li>

        <li><ImOffice/> {props.company}</li>
      </ul>
    </Container>
  )  
}
