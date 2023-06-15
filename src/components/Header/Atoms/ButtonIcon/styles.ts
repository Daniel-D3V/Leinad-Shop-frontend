import { styled } from 'styled-components';

export const Button = styled.button`
    position: relative;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.icons.theme.color};
    border: none;
    outline: none;
    background: transparent;
    transition: all .3s ease;
    font-weight: 600;

    svg {
        font-size: 1rem;
    }

    &:hover {
        color: ${props => props.theme.buttons.outline.hover.color};
        border-color: ${props => props.theme.buttons.outline.hover.borderColor};
    }
`