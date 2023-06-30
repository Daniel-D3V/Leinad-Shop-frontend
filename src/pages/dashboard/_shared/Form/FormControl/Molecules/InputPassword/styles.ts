import { styled } from "styled-components";

interface InputPasswordStyledProps {
    focus?: boolean
}

export const InputPasswordStyled = styled.div<InputPasswordStyledProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.borders.primary.color};
    transition: box-shadow 0.35s ease;
    margin-bottom: 8px;

    ${props => props.focus && `
        box-shadow: 0px 0px 0px 1px ${props.theme.colors.primary};
    `}
`