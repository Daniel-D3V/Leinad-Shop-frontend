import { CardProductStockStyled } from "./styles"

type Props = {
    stock: number
}

export const CardProductStock = ({ stock }: Props) => {
    return (
        <CardProductStockStyled>{stock} em estoque</CardProductStockStyled>
    )
}