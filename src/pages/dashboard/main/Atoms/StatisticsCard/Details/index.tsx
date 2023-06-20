import { StatisticsCardDetailsTitle } from "./Title";
import { StatisticsCardDetailsValue } from "./Value";
import { StatisTicsCardDetailsStyled } from "./styles";

type Props = {
    title: string,
    value: number
}

export const StatisticsCardDetails = ({ title, value }: Props) => {
    return (
        <StatisTicsCardDetailsStyled>
            <StatisticsCardDetailsTitle title={title} />
            <StatisticsCardDetailsValue value={value} />
        </StatisTicsCardDetailsStyled>
    )
}