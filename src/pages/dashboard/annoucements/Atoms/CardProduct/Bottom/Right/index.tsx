import { CardProductPrice } from "./Price"
import { CardProductStock } from "./Stock"
import { CardProductBottomRightStyled } from "./styles"

export const CardProductBottomRight = () => {
    return (
        <CardProductBottomRightStyled>
            <CardProductStock stock={2} />
            <CardProductPrice price={25} />
        </CardProductBottomRightStyled>
    )
}