import { Col } from "react-bootstrap";
import { styled } from "styled-components";

export const ColCardProductStyles = styled(Col)`
    /* color: black; */
    margin-bottom: 20px;
`

export const CardProductStyles = styled.div`
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.backgrounds.bgSecondary};
    border: 1px solid ${props => props.theme.borders.secondary.color};
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
        border-color: ${props => props.theme.borders.secondary.hover};
        transform: translateY(-3%);
    }
`