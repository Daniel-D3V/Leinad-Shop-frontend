import { TotalSalesCardDetailsTitle } from "./Title";
import { TotalSalesCardDetailsValue } from "./Value";
import { TotalSalesCardDetailsStyled } from "./styles";

type Props = {
    time: Date,
    value: number,
}

export const TotalSalesCardDetails = ({ time, value }: Props) => {
    return (
        <TotalSalesCardDetailsStyled>
            <TotalSalesCardDetailsTitle time={time} />
            <TotalSalesCardDetailsValue value={value} />
        </TotalSalesCardDetailsStyled>
    )
}