import { styled } from 'styled-components';

export const ButtonToggleStyled = styled.button`
    position: relative;
    border-radius: 50px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.buttons.outline.color};
    border: 1px solid ${props => props.theme.buttons.outline.borderColor};
    background: transparent;
`