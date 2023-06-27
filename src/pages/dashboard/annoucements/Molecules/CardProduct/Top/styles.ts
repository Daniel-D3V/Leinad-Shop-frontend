import { styled } from "styled-components";

export const CardProductTopStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 2px solid ${props => props.theme.borders.secondary.color};
`