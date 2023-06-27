import { styled } from "styled-components";

export const CardProductOptionsButtonStyled = styled.button`
    border: none;
    outline: none;
    background: transparent;
    color: ${props => props.theme.texts.subtitle};
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
`