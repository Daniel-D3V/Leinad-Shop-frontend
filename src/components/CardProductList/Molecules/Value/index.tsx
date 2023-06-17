import { OldValuePromotion } from "../../Atoms/OldValuePromotion"
import { Price } from "../../Atoms/Price"
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
            {promotion && (<OldValuePromotion value={promotion?.old_value} />)}
            <Price value={promotion ? promotion.value : price} />
        </ValueStyled>
    )
}