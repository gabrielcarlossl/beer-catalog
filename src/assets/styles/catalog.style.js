import { css } from '@emotion/css'

export const catalogContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cardSection {
    background-color: rgb(206,204,247, 0.2);
    border-radius: 20px;
  }
  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 38px;
    letter-spacing: 3.2px;
    color: #fff71c;
    -webkit-text-stroke: 2px #6602fa;
    @media (max-width: 500px) {
      font-size: 40px;
      text-align: center;
      line-height: 120%;
    }
  }
`
