import { Col, Row } from "react-bootstrap"
import { Container } from "../Organisms/Container"
import { FooterStyled } from "./styles"
import { Title } from "../Atoms/Title"
import { Link } from "../Atoms/Link"
import { About } from "../Molecules/About"
import { Description } from "../Atoms/Description"
import { Logo } from "../Atoms/Logo"
import { Copyright } from "../Atoms/Copyright"

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <Row>
                    <Col md={5}>
                        <Logo />
                        <About>
                            <Description description="Leinad Shop a plataforma numero 🥇 de vendas do brazil e do mundo, dando boost nas vendas online, trabalhamos para criar um mercado online de vendas e compras de produtos online trazendo a facilidade e segurança em suas compras e vendas!" />
                            <Copyright />
                        </About>
                    </Col>
                    <Col md={2}>
                        <Title title="Contato" />
                        <About>
                            <Link href="/" content="Comprar" />
                            <Link href="/" content="Vender" />
                            <Link href="/" content="Solução de problemas" />
                            <Link href="/" content="Segurança" />
                        </About>
                    </Col>
                    <Col md={2}>
                        <Title title="Minha conta" />
                        <About>
                            <Link href="/" content="Entre" />
                            <Link href="/" content="Vender" />
                        </About>
                    </Col>
                    <Col md={2}>
                        <Title title="Empresa" />
                        <About>
                            <Link href="/" content="Dados" />
                            <Link href="/" content="infos e mais" />
                        </About>
                    </Col>
                </Row>
            </Container>
        </FooterStyled>
    )
}