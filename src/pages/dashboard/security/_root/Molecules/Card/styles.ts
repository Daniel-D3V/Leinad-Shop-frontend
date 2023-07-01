import Link from "next/link";
import { styled } from "styled-components";

export const LinkStyled = styled(Link)`
    text-decoration: none;
`

export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    background: ${props => props.theme.backgrounds.bgDark};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px;
    border-radius: 5px;
    transition: 0.5s ease;

    &:hover {
        border-color: ${props => props.theme.borders.secondary.hover};
        box-shadow: 0 0 0 1.5px ${props => props.theme.borders.secondary.hover};
        transform: translateY(-3%);
    }
`