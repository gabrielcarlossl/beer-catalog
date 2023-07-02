import { css } from '@emotion/css'
import styled from '@emotion/styled'

export const modalStyle = css`
    margin: 50px auto;
    width: 500px;
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    img {
        margin-top: 20px;
        height: 270px;
    }
    p {
        font-weight: bold;
    }
    span{
        text-align: left;
        font-weight: 400;
    }
    svg {
        align-self: flex-end;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        width: 300px;
    }
`