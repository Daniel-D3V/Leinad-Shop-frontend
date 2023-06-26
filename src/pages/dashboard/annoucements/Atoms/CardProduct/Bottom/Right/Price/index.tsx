import { CardProductPriceStyled } from "./styles"

type Props = {
    price: number
}

export const CardProductPrice = ({ price }: Props) => {
    return (
        <CardProductPriceStyled>R${price.toFixed(2)}</CardProductPriceStyled>
    )
}