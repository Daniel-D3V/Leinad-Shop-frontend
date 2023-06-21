import { StatisticsCardDetailsTitle } from "./Title";
import { StatisticsCardDetailsValue } from "./Value";
import { StatisTicsCardDetailsStyled } from "./styles";

type Props = {
    title: string,
    value: number,
    type?: "number" | "price"
}

export const StatisticsCardDetails = ({ title, value, type }: Props) => {
    return (
        <StatisTicsCardDetailsStyled>
            <StatisticsCardDetailsTitle title={title} />
            <StatisticsCardDetailsValue value={value} type={type} />
        </StatisTicsCardDetailsStyled>
    )
}