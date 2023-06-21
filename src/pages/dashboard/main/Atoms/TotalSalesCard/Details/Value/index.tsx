import { TotalSalesCardDetailsValueStyled } from "./styles";

type Props = {
    value: number
}

export const TotalSalesCardDetailsValue = ({ value }: Props) => {
    return (
        <TotalSalesCardDetailsValueStyled>R${value.toFixed(2)}</TotalSalesCardDetailsValueStyled>
    )
}