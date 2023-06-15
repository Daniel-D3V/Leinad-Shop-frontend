import { styled } from 'styled-components';

export interface ContentStyledProps {
    active: boolean
}

export const ContentStyled = styled.div<ContentStyledProps>`
    display: ${props => props.active ? "flex" : "none"};
    position: absolute;
    bottom: 0;
    transform: translate(0px, 40px);
    flex-direction: column;
`