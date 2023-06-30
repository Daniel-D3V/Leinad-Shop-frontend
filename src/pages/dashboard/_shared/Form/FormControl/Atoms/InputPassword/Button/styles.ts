import { styled } from "styled-components";

export const InputPasswordButtonStyled = styled.button`
    background: none;
    border: none;
    outline: none;
    color: ${props => props.theme.texts.subtitle};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`