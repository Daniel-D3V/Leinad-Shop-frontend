import { styled } from "styled-components";

export const DevicesCardLocalizationStyled = styled.p`
    color: ${props => props.theme.texts.title};
    font-size: 0.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 5px;
`

export const DevicesCardLocalizationSeparatorStyled = styled.span`
    width: 3.5px;
    height: 3.5px;
    background: ${props => props.theme.texts.description};
    border-radius: 100%;
`