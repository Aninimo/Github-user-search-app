import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 550px;
  height: 55px;
  display: flex;
  justify-content: center;
  gap: .5rem;
  padding: 10px;
  border-radius: .5rem;
  background: #0077b6;

  @media screen and (max-width: 767px){
    width: 350px;
  }
`

export const HeaderInput = styled.input`
  outline: none;
  border: none;
  background: none;
  color: #fff;

  ::-webkit-input-placeholder{
    color: #fff;
  }
`

export const ButtonSearch = styled.button`
  padding: 2px 50px;
  border: none;
  border-radius: .5rem;
  background: #0096c7;
  color: #fff;
  margin-left: 9rem;
  font-size: 1.5rem;
  font-weight: bold;
  transition: .5s;

  :hover{
    background: #023e8a;
  }

  @media screen and (max-width: 767px){
    padding: 5px 15px;
    margin-left: -.5rem;
    font-size: 1rem;
  }
`
