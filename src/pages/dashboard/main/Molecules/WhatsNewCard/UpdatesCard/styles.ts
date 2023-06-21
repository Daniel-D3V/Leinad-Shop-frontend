import { styled } from "styled-components";

export const UpdatesCardStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background: ${props => props.theme.backgrounds.bgDark};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px;
    border-radius: 5px;
`