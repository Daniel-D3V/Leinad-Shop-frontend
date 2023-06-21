import { TotalSalesCardDetailsTitleStyled } from "./styles";

type Props = {
    time: Date,
}

export const TotalSalesCardDetailsTitle = ({ time }: Props) => {
    return (
        <TotalSalesCardDetailsTitleStyled>Ganhos totais <small>({time.toLocaleDateString()})</small></TotalSalesCardDetailsTitleStyled>
    )
}