import { styled } from "styled-components";

export const ExampleStyled = styled.small`
    font-size: 0.7rem;
    font-weight: 500;
    opacity: 0.9;
    color: ${props => props.theme.texts.description};
`