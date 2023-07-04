import { styled } from "styled-components";

export const DevicesCardRootStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    background: ${props => props.theme.backgrounds.bgDark};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px;
    border-radius: 5px;
`