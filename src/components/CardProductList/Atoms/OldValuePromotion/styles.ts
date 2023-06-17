import { styled } from "styled-components";

interface OldValuePromotionStyledProps {
    active: boolean
}

export const OldValuePromotionStyled = styled.p<OldValuePromotionStyledProps>`
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: line-through;
    margin-bottom: 0;
    color: ${props => props.theme.texts.subprice};
    ${props => !props.active && `
        height: 18px;
    `}
`