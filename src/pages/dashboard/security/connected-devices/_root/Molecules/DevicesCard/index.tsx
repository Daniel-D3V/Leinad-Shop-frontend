import { ReactNode } from "react"
import { DevicesCardRootStyled } from "./styles"
import { Col } from "react-bootstrap"

type DevicesCardRootProps = {
    children: ReactNode
}

export const DevicesCardRoot = ({ children }: DevicesCardRootProps) => {
    return (
        <Col md={12}>
            <DevicesCardRootStyled>{children}</DevicesCardRootStyled>
        </Col>
    )
}