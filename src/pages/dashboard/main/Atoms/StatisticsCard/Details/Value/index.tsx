import { StatisticsCardDetailsValueStyled } from "./styles";

type Props = {
    value: number,
    type?: "number" | "price"
}

export const StatisticsCardDetailsValue = ({ value, type = "number" }: Props) => {
    return (
        <StatisticsCardDetailsValueStyled>
            {type === "number" && value}
            {type === "price" && `R$${value.toFixed(2)}`}
        </StatisticsCardDetailsValueStyled>
    )
}