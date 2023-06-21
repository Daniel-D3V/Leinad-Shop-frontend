import { styled } from "styled-components";

export const TotalSalesCardDetailsTitleStyled = styled.p`
    color: ${props => props.theme.texts.subtitle};
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0.6;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
`

export const TotalSalesCardDetailsTimeStyled = styled.span`
    color: ${props => props.theme.colors.primary}
`