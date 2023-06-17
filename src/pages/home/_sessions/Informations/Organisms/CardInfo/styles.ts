import { Col } from "react-bootstrap";
import { styled } from "styled-components";

export const ColCardInfoStyled = styled(Col)`
    /* color: black; */
    margin-bottom: 20px;
`

export const CardInfoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.borders.secondary.color};
`