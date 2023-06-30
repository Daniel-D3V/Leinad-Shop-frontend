import { styled } from "styled-components";

export const InputStyled = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: 0.85rem;
    border: 1px solid ${props => props.theme.borders.primary.color};
    border-radius: 8px;
    background: ${props => props.theme.backgrounds.bgPrimary};
    color: ${props => props.theme.texts.subtitle};
    transition: box-shadow 0.35s ease;
    margin-bottom: 8px;

    &:focus {
        box-shadow: 0px 0px 0px 1px ${props => props.theme.colors.primary};
    }

    &:disabled {
        color: ${props => props.theme.texts.description};
        cursor: not-allowed;
    }

     &::placeholder {
        opacity: 0.5;
        color: ${props => props.theme.texts.description};
    }
`