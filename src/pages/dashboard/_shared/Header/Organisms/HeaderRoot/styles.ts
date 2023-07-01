import { styled } from "styled-components";

type HeaderRootStyledProps = {
    direction: "left" | "center" | "right"
}

export const HeaderRootStyled = styled.header<HeaderRootStyledProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;

    ${props => props.direction === "left" && `
        align-items: flex-start;
    `};

    ${props => props.direction === "center" && `
        align-items: center;
        text-align: center;
    `};

    ${props => props.direction === "right" && `
        align-items: flex-end;
    `};
`