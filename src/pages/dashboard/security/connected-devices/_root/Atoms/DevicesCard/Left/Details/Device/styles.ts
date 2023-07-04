import { styled } from "styled-components";

export const DevicesCardDeviceStyled = styled.p`
    color: ${props => props.theme.texts.subtitle};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 5px;
`

export const DevicesCardDeviceSeparatorStyled = styled.span`
    width: 3.5px;
    height: 3.5px;
    background: ${props => props.theme.texts.description};
    border-radius: 100%;
`

export const DevicesCardDeviceApplicationStyled = styled.span`

`