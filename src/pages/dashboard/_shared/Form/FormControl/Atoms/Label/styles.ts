import { styled } from "styled-components";

export const LabelStyled = styled.label`
    font-size: 0.7rem;
    font-weight: 600;
    color: ${props => props.theme.texts.description};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.3rem;
    margin-bottom: 2px;
`

export const LabelRequiredStyled = styled.label`
    color: ${props => props.theme.colors.red};
`