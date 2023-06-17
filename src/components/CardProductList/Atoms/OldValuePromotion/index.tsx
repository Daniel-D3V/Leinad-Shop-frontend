import { OldValuePromotionStyled } from "./styles"

type Props = {
    value: number
}

export const OldValuePromotion = ({ value }: Props) => {
    return (
        <OldValuePromotionStyled active={value > 0}>
            {value > 0 && `R${value.toFixed(2)}`}
        </OldValuePromotionStyled>
    )
}