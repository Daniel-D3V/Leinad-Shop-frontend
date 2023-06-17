import { styled } from "styled-components";

type PromotionStyledProps = {
    active: boolean
}

export const PromotionStyled = styled.div<PromotionStyledProps>`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    ${props => !props.active && `
        height: 18px;
    `}
`