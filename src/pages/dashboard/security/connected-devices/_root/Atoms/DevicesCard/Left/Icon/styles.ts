import { styled } from "styled-components";

export const DevicesCardIconStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px;
    border-radius: 100%;
    background: ${props => props.theme.backgrounds.bgPrimary};
    border: 1px solid ${props => props.theme.borders.primary.color};

    svg {
        color: ${props => props.theme.texts.subtitle};
        font-size: 2rem;
    }
`