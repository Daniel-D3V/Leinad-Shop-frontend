import { CardInfo, CardInfoProps } from "../CardInfo"
import { RowCardStyled } from "./styles"

type Props = {
    cards: CardInfoProps[]
}

export const RowCards = ({ cards }: Props) => {
    return (
        <RowCardStyled>
            {cards.map((card, index) => (
                <CardInfo {...card} key={index} />
            ))}
        </RowCardStyled>
    )
}