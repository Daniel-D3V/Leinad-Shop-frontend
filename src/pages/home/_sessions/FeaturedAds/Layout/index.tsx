import { ListCardProduct } from "@/components/CardProductList/Layout"
import { Title } from "../Atoms/Title"
import { Container } from "../Organisms/Container"
import { Section } from "../Organisms/Section"

export const FeaturedAds = () => {
    return (
        <Section>
            <Container>
                <Title>Em destaque</Title>
                <ListCardProduct />
            </Container>
        </Section>
    )
}