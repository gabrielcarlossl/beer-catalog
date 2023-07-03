import { css } from '@emotion/css'

import styled from '@emotion/styled'

export const Hr = styled.hr`
  border: 2px solid #5C4527;
`

export const container = css`
  align-items: center;
  background-color: #FFAA3B;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  .logo{    
    img {
      margin-bottom: 0;
    }
    p {
      margin: 0;
      padding:0;
      text-align: center;
      font-size: 24px;
      margin-left: 10px;
      font-weight: 900;
      color: #5C4527;
    }
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
    }
  }
`


export const logoStyle = css`
  margin: 10px;
  width: 60px;
`

export const linkContainer = css`
  display: flex;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 5px;
  }
  
  a {
    text-decoration: none;
    margin: 10px;
    font-size: 24px;
    font-weight: 600;
    color: #5C4527;
    padding: 8px;
    border-radius: 8px;
    @media (max-width: 500px) {
      font-size: 14px;
      padding: 5px;
      margin: 8px;
      text-align: center;
    }
  }
  
  a:hover {
    background-color: #1FA5F0;
  }
`

