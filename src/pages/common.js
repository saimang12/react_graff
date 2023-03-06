import styled, { css } from "styled-components";

export const Inner = styled.div`
width: 1200px;
margin: 0 auto;
`

export const BTN = styled.button`
background: transparent;
padding: 5px 20px;
border: 1px solid #333;
text-transform: uppercase;
font-size: 12px;

${props => props.color && css`
    background: ${props.color};
`}

`