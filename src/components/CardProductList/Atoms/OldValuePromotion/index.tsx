import { OldValuePromotionStyled } from "./styles"

type Props = {
    value: number
}

export const OldValuePromotion = ({ value }: Props) => {
    return (
        <OldValuePromotionStyled>R${value.toFixed(2)}</OldValuePromotionStyled>
    )
}