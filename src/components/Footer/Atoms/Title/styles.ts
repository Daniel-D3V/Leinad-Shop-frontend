import { styled } from "styled-components";

export const TitleStyled = styled.h2`
    text-transform: uppercase;
    color: ${props => props.theme.texts.title};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 15px;
`