import { CardPromotionButton } from "../../Atoms/CardPromotionButton"
import { CardPromotionDescription } from "../../Atoms/CardPromotionDescription"
import { CardPormotionStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const CardPromotion = ({ children }: Props) => {
    return (
        <CardPormotionStyled >
            <CardPromotionDescription children={children} />
            <CardPromotionButton />
        </CardPormotionStyled>
    )
}