import { Col } from "react-bootstrap";
import { styled } from "styled-components";

export const CardStyled = styled(Col)`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    img {
        transition: 0.25s ease;
        border: 1px solid transparent;
        object-fit: cover;
    }

    &:hover {
        img {
            margin-top: -5px;
            filter: brightness(120%);
            box-shadow: ${props => props.theme.dropshadows.secondary} 0px 0px 0px 3px;
        }
    }
`