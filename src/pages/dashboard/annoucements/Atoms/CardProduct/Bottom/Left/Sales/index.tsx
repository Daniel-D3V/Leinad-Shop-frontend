import { CardProductSalesStyled } from './styles';

type Props = {
    sales: number
}

export const CardProductSales = ({ sales }: Props) => {
    return (
        <CardProductSalesStyled>{sales} vendas</CardProductSalesStyled>
    )
}