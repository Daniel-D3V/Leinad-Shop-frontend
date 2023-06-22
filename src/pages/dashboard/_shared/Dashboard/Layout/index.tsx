import { Col, Row } from "react-bootstrap"
import { SideBar } from "../../SideBar/Layout"
import { DashboardStyled } from "./styles"
import { Container } from "../Organisms/Container"
import { Footer } from "@/components/Footer/Layout"
import { Navbar } from "@/components/Navbar/Layout"

type Props = {
    children: React.ReactNode,
    selected: number
}

export const Dashboard = ({ children, selected }: Props) => {
    return (
        <>
            <Navbar />
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
            <Footer />
        </>
    )
}