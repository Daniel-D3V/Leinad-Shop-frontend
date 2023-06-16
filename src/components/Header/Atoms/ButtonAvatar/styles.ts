import { styled } from "styled-components";
import Badge from '@mui/material/Badge';
import { Avatar } from "@mui/material";

export const ButtonStyled = styled.button`
    position: relative;
    background: none;
    outline: none;
    border: none;
`

export const OnlineIconStyled = styled.span`
    position: absolute;
    width: 9px;
    height: 9px;
    background: ${props => props.theme.colors.green};
    border-radius: 50%;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.bgPrimary};

    &::after {
        position: 'absolute';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        animation: ripple 1.2s infinite ease-in-out;
        border: 1px solid currentColor;
        content: '""',
    }

    @keyframes ripple {
        0% {
            transform: scale(.8);
            opacity: 1;
        }

        100% {
            transform: scale(2.4);
            opacity: 0;
        }
    }
`