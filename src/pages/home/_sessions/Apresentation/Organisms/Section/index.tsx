import React from "react"
import { SectionStyled } from "./styles"
import { Container } from "../../Molecules/Container"
import { Content } from "../../Molecules/Content"
import { Title } from "../../Atoms/Title"
import { Description } from "../../Atoms/Description"
import { Button } from "../../Atoms/Button"

export const Section = () => {
    return (
        <SectionStyled>
            <Container>
                <Content>
                    <Title>Leinad Shop</Title>
                    <Description>A merketplace numero 🥇 de vendas do brasil e do mundo</Description>
                    <Button>Como funciona?</Button>
                </Content>
            </Container>
        </SectionStyled>
    )
}