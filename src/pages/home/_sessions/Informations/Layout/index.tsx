import { FcCustomerSupport, FcLock, FcPaid } from "react-icons/fc"
import { CardInfoProps } from "../Organisms/CardInfo"
import { Container } from "../Organisms/Container"
import { RowCards } from "../Organisms/RowCards"
import { Section } from "../Organisms/Section"

export const Informations = () => {

    const cards: CardInfoProps[] = [
        {
            icon: <FcCustomerSupport />,
            title: "Suporte 24/7",
            description: "Em nossa empresa possuimos uma equipe especializada para atendimento e solução de problemas, disponível 24 horas por dia."
        },
        {
            icon: <FcLock />,
            title: "Segurança",
            description: "Para a sua segurança utilizamos práticas avançadas para proteção total de suas informações e dados contra terceiros."
        },
        {
            icon: <FcPaid />,
            title: "Compra segura",
            description: "Possuimos garantia de transações seguras, com o repasse do pagamento ao vendedor somente após a confirmação da compra pelo comprador."
        }
    ]

    return (
        <Section>
            <Container>
                <RowCards cards={cards} />
            </Container>
        </Section>
    )
}