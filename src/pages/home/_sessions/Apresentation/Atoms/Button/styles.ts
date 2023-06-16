import { ThemeConsumer, styled } from "styled-components";

export const ButtonStyled = styled.button`
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 13px 38px;
    font-size: 0.98rem;
    font-weight: 500;
    transition: background 0.3s ease;
    background: ${props => props.theme.buttons.primary};
    color: ${props => props.theme.buttons.primary.color};

    &:hover {
        background: ${props => props.theme.buttons.primary.hover.background};
    }
`