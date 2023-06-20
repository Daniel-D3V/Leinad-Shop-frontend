import { Col, Row } from "react-bootstrap"
import { SideBar } from "../../SideBar/Layout"
import { DashboardStyled } from "./styles"
import { Container } from "../Organisms/Container"

type Props = {
    children: React.ReactNode,
    selected: number
}

export const Dashboard = ({ children, selected }: Props) => {
    return (
        <DashboardStyled>
            <Container>
                <Row>
                    <Col md={3}>
                        <SideBar selected={selected} />
                    </Col>
                    <Col md={9}>{children}</Col>
                </Row>
            </Container>
        </DashboardStyled>
    )
}