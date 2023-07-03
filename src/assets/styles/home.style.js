import { css } from '@emotion/css'

export const style = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-y: hidden;
  background-color: #76CFA5;
  align-items: center;
  .bear{
    border: 2px solid #5C4525;
    border-radius: 40px;
    margin-top: 50px;
    margin-bottom: 30px;
    width: 500px;
    @media (max-width: 500px) {
      width: 350px;
      margin-top: 20px;
    }
  }
  a {
    color: #5C4527;
    font-size: 24px;
    font-weight: 600;
    margin-top: 50px;
    text-decoration: none;
    @media (max-width: 500px) {
      font-size: 20px;
      margin-top: 20px;
    }
  }
  h1 {
    margin-top: 100px;
    color: #5C4525;
    font-weight: 700;
    @media (max-width: 500px) {
      
      margin-top: 30px;
    }
  }
  a:hover {
    text-decoration: underline;
  }
`
export const icon = css`
  font-size: 25px;
`
