import { PriceStyled } from "./styles"

type Props = {
    value: number
}

export const Price = ({ value }: Props) => {
    return (
        <PriceStyled>R${value.toFixed(2)}</PriceStyled>
    )
}