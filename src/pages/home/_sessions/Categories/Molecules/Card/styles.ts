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
            border-color: ${props => props.theme.colors.primary};
            filter: brightness(120%);
        }
    }
`