import { styled } from "styled-components";

export const TitleStyled = styled.p`
    display: inline-block;
    font-size: 0.95rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${props => props.theme.texts.subtitle};
    margin-bottom: 8px;
`