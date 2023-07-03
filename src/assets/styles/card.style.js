import { css } from '@emotion/css'
import styled from '@emotion/styled'

export const cardStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 70vw;
  justify-content: center;
  img {
    width: 60px;
    height: 140px;
  }
`

export const cardContent = css`
  align-items: center;
  background-color: #1FA5F0;
  border: 2px solid #5C3C27;
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

export const SelectButton = styled.button`
  background-color: #F0951F;
  border-radius: 8px;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  padding: 10px;
  :hover {
    color: black;
    background-color: #FFAA3B;
  }
`
export const paginationStyle = css`
  margin-top: 30px;
  margin-bottom: 20px;
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
    background-color: #F0951F;
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
