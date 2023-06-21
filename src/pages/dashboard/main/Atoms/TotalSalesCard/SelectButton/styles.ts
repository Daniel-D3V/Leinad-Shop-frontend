import { styled } from "styled-components";

export const TotalSalesCardSelectButtonStyled = styled.button`
    background: ${props => props.theme.backgrounds.bgPrimary};
    color: ${props => props.theme.texts.subtitle};
    border: 2px solid ${props => props.theme.borders.primary.color};
    border-radius: 5px;
    padding: 8px 15px;
    outline: none;
    cursor: pointer;
`