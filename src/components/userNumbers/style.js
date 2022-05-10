import styled from "styled-components"

export const Container = styled.div`
  width: 480px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10px;
  border-radius: .5rem;
  background: #0096c7;
  font-size: .85rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;

  @media screen and (max-width: 767px){
    width: 280px;
    gap: 1rem;
    font-size: .5rem;
  }
`

export const NumberContainer = styled.div`

`
