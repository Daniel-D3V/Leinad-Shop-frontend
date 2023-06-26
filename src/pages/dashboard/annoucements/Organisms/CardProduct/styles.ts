import { styled } from "styled-components";

export const CardProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.theme.backgrounds.bgDark};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px;
    border-radius: 5px;
`