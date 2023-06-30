import { Card, CardProps } from "../../Molecules/Card"
import { RowCardsStyled } from "./styles"

type Props = {
    cards: CardProps[]
}

export const RowCards = ({ cards }: Props) => {
    return (
        <RowCardsStyled>
            {cards.map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </RowCardsStyled>
    )
}