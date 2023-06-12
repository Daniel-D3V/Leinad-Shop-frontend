import { styled } from 'styled-components';

export const Button = styled.button`
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
    transition: all .3s ease;

    &:hover{
        color: ${props => props.theme.buttons.outline.hover.color};
        border-color: ${props => props.theme.buttons.outline.hover.borderColor};
    }
`