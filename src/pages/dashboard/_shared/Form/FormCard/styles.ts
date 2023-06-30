import { Col } from "react-bootstrap";
import { styled } from "styled-components";

type FormCardStyledProps = {
    direction: "left" | "right"
}

export const FormCardStyled = styled(Col) <FormCardStyledProps>`
    display: flex;
    flex-direction: column;

    ${props => props.direction === "left" && `
        align-items: flex-start;
    `}
    ${props => props.direction === "right" && `
        align-items: flex-end;
    `}
`