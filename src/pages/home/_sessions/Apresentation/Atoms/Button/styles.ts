import { ThemeConsumer, styled } from "styled-components";

export const ButtonStyled = styled.button`
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 10px 35px;
    font-size: 1.05rem;
    transition: background 0.3s ease;
    background: ${props => props.theme.buttons.primary};
    color: ${props => props.theme.buttons.primary.color};

    &:hover {
        background: ${props => props.theme.buttons.primary.hover.background};
    }
`