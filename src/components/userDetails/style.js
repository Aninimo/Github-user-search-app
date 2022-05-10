import styled from "styled-components"

export const Container = styled.div`

`

export const Name = styled.h1`
  margin-bottom: 1rem;
  
  @media screen and(max-width: 767px){
   font-size: 1.2rem;
  }
`

export const UserName = styled.h3`
  margin-bottom: 1rem;
  color: #ced4da;

  @media screen and(max-width: 767px){
    font-size: 1rem;
  }
`

export const Details = styled.p`
  @media screen and (max-width: 767ox){
    font-size: .75rem;
  }
`
