import { styled } from "styled-components";

export const SideBarStyled = styled.div`
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`