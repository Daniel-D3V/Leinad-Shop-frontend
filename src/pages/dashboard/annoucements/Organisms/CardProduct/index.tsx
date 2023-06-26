import { Col } from "react-bootstrap"
import { CardProductStyled } from "./styles"
import { CardProductTop } from "../../Molecules/CardProduct/Top"
import { CardProductBottom } from "../../Molecules/CardProduct/Bottom"

export const CardProduct = () => {
    return (
        <Col md={12}>
            <CardProductStyled>
                <CardProductTop />
                <CardProductBottom />
            </CardProductStyled>
        </Col>
    )
}