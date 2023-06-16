import { Button } from "../Atoms/Button";
import { Description } from "../Atoms/Description";
import { Title } from "../Atoms/Title";
import { CardPromotion } from "../Molecules/CardPromotion";
import { Container } from "../Organisms/Container";
import { Content } from "../Organisms/Content";
import { Section } from "../Organisms/Section";

export const Apresentation = () => {
    return (
        <Section>
            <Container>
                <Content>
                    <Title>Leinad Shop</Title>
                    <Description>A merketplace numero 🥇 de vendas do brasil e do mundo</Description>
                    <Button>Conheça agora</Button>
                    <CardPromotion>🎁 Ganhe até 50% de desconto na primeira compra.</CardPromotion>
                </Content>
            </Container>
        </Section>
    )
}