import { css } from '@emotion/css'

export const style = css`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  text-align: center;
  height: 90vh;
  a {
    color: #5c3c27;
    font-size: 24px;
    font-weight: 600;
    margin-top: 50px;
    text-decoration: none;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  h1 {
    color: #8119FF;
  }
  a:hover {
    text-decoration: underline;
  }
`
export const icon = css`
  font-size: 25px;
`
