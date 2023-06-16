import { styled } from "styled-components";

export const CardPormotionStyled = styled.div`
    margin-top: 40px;
    background: ${props => props.theme.colors.bgSecondary};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;
    border: 1px solid ${props => props.theme.colors.primary};
    gap: 1rem;
`