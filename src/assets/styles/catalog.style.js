import { css } from '@emotion/css'

export const catalogContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 38px;
    letter-spacing: 3.2px;
    color: #F0951F;
    -webkit-text-stroke: 2px #5C4527;
    @media (max-width: 500px) {
      font-size: 40px;
      text-align: center;
      line-height: 120%;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }
`
