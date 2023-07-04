import { styled } from "styled-components";

export const RowDevicesTitleStyled = styled.p`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: ${props => props.theme.texts.description};
`