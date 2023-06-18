import { styled } from "styled-components";
import Link from 'next/link';

export const LinkStyled = styled(Link)`
    color: ${props => props.theme.texts.description};
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 500;
    opacity: 0.85;
    transition: color .25s ease;

    &:hover {
        color: ${props => props.theme.texts.title};
    }
`