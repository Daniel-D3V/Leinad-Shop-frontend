import { StatisticsCardDetailsValueStyled } from "./styles";

type Props = {
    value: number
}

export const StatisticsCardDetailsValue = ({ value }: Props) => {
    return (
        <StatisticsCardDetailsValueStyled>{value}</StatisticsCardDetailsValueStyled>
    )
}