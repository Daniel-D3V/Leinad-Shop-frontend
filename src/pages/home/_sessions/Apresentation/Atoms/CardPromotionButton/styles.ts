import { styled } from "styled-components";

export const CardPromotionButtonStyled = styled.button`
    border: none;
    outline: none;
    color: ${props => props.theme.buttons.primary.color};
    background: ${props => props.theme.buttons.primary.background};
    padding: 5px;
    border-radius: 10px;
`