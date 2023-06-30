import { styled } from "styled-components";

export const ButtonStyled = styled.button`
    padding: 10px 25px;
    border: none;
    outline: none;
    border-radius: 8px;
    background: ${props => props.theme.buttons.primary.background};
    color: ${props => props.theme.buttons.primary.color};
    transition: background 0.3s ease;

    &:hover {
        background: ${props => props.theme.buttons.primary.hover.background};
    }
`