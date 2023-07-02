import { css } from '@emotion/css'
import styled from '@emotion/styled'

export const cardStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 70vw;
  justify-content: center;
  img {
    width: 70px;
    height: 140px;
  }
`

export const cardContent = css`
  align-items: center;
  background-color: rgb(109,0,242, 0.2);
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
  background-color: #8019FF;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  padding: 10px;
  :hover {
    color: black;
    background-color: #FEC324;
  }
`
export const paginationStyle = css`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
    padding: 7px 10px;
    font-size: 15px;
    margin: 5px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    
    :hover {
      background-color: #FEC324;
    }
  }
  button[disabled]:hover {
    cursor: not-allowed;
  }
`
export const arrows = css`
  border: none;
  border-radius: 50% !important;
  padding: 7px !important;
  background-color: rgb(128,128,128, 0.5) !important;

  :hover {
    background-color: #FEC324 !important;
  }
`
