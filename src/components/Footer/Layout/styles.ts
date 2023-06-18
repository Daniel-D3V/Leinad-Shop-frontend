import { styled } from "styled-components";

export const FooterStyled = styled.footer`
    border-top: 1px solid ${props => props.theme.borders.primary.color};
    background: ${props => props.theme.backgrounds.bgSecondary};
    margin-top: 1rem;
`