import { styled } from "styled-components";

export const OldValuePromotionStyled = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: line-through;
    margin-bottom: 0;
    color: ${props => props.theme.texts.subprice};
`