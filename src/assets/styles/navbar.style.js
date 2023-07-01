import { css } from '@emotion/css'

import styled from '@emotion/styled'

export const container = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Hr = styled.hr`
  border: 2px solid #5c3c27;
  box-shadow: 1px 3px 10px;
`
export const logoStyle = css`
  margin: 10px;
`

export const linkContainer = css`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    margin: 10px;
    font-size: 24px;
    font-weight: 600;
    color: black;
    padding: 10px;
    border-radius: 8px;
  }
  a:hover {
    background-color: #5c3c27b2;
  }
`

