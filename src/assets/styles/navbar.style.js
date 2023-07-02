import { css } from '@emotion/css'

import styled from '@emotion/styled'

export const container = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Hr = styled.hr`
  border: 2px solid #791FFF;
  box-shadow: 1px 3px 10px;
  margin: 0;
  padding: 0;
`
export const logoStyle = css`
  margin: 10px;
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
    color: #9C19FF;
    padding: 10px;
    border-radius: 8px;
    @media (max-width: 500px) {
      font-size: 14px;
      padding: 5px;
      margin: 8px;
      text-align: center;
    }
  }
  
  a:hover {
    background-color: #EBE302;
  }
`

