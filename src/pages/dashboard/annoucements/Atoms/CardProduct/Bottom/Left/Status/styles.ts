import { styled } from "styled-components";
import { CardProductStatusProps } from ".";

export const CardProductStatusStyled = styled.p<CardProductStatusProps>`
    font-size: 0.75rem;
    margin-bottom: 0;

    svg {
        font-size: 0.95rem;
    }

    ${props => props.status === "ACTIVE" && `
        color: ${props.theme.colors.green};
    `}

    ${props => props.status === "DISABLED" && `
        color: ${props.theme.colors.red};
    `}
`