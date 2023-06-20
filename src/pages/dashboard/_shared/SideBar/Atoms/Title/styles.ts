import { styled } from "styled-components";

export const TitleStyled = styled.p`
    color: ${props => props.theme.texts.description};
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-bottom: 8px;
`