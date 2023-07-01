import { css } from '@emotion/css'
import styled from '@emotion/styled'

export const cardStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 70vw;

  img {
    width: 70px;
    height: 140px;
  }
`

export const cardContent = css`
  align-items: center;
  background-color: rgb(0, 128, 0, 0.2);
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 15px;
  width: 250px;
  h3 {
    margin-bottom: 50px;
    text-align: center;
  }
  p {
    font-size: 13px;
  }
`

export const VerMais = styled.button`
  background-color: #5c3c27;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  padding: 10px;
  :hover {
    background-color: rgb(92, 60, 39, 0.8);
  }
`
