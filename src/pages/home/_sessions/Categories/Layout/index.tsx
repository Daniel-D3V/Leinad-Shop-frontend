import { Title } from "../Atoms/Title";
import { Card } from "../Molecules/Card";
import { Container } from "../Organisms/Container";
import { RowCard } from "../Organisms/RowCards";
import { Section } from "../Organisms/Section";

export const Categories = () => {
    return (
        <Section>
            <Container>
                <Title />
                <RowCard>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </RowCard>
            </Container>
        </Section>
    )
}