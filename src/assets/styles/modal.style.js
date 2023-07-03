import { css } from '@emotion/css'
import styled from '@emotion/styled'

export const modalStyle = css`
    margin: 50px auto;
    width: 500px;
    background-color: #89CFF0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    h2{
        @media (max-width: 500px) {
            margin-top: 0%;
            padding-top: 0;
        }
    }
    hr { 
        width: 100%;
        border: 2px solid black;
        border-radius: 10px;
    }
    img {
        
        height: 270px;
    }
    p {
        @media (max-width: 500px) {
            margin: 0;
            padding-top: 0;

        }
        font-weight: bold;
    }
    span{
        text-align: left;
        font-weight: 400;
    }
    svg {
        align-self: flex-end;
        cursor: pointer;
        padding: 5px;
        :hover {
            background-color: #1FA5F0;
            border-radius: 50%;
            

        }
    }

    @media (max-width: 600px) {
        width: 300px;
    }
`