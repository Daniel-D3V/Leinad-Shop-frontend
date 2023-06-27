import { styled } from "styled-components";

export const CardProductOptionsStyled = styled.div`
    position: absolute;
    top: -10px;
    left: -320px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${props => props.theme.borders.secondary.color};
    background: ${props => props.theme.backgrounds.bgPrimary};
`