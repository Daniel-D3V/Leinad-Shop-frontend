import { OldValuePromotion } from "../../Atoms/OldValuePromotion"
import { Price } from "../../Atoms/Price"
import { Promotion } from "../Promotion"
import { ValueStyled } from "./styles"

type Props = {
    price: number,
    promotion?: {
        old_value: number,
        value: number,
        discount_percentage: number
    },
}

export const Value = ({ price, promotion }: Props) => {
    return (
        <ValueStyled>
            <Promotion promotion={promotion} />
            <Price value={promotion ? promotion.value : price} />
        </ValueStyled>
    )
}