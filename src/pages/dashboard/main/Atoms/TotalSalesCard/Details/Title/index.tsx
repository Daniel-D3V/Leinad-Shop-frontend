import { TotalSalesCardDetailsTimeStyled, TotalSalesCardDetailsTitleStyled } from "./styles";
import TimeAgo from 'react-timeago';

type Props = {
    time: Date,
}

export const TotalSalesCardDetailsTitle = ({ time }: Props) => {
    return (
        <TotalSalesCardDetailsTitleStyled>
            Ganhos totais
            <TotalSalesCardDetailsTimeStyled>(<TimeAgo date={time}></TimeAgo>)</TotalSalesCardDetailsTimeStyled>
        </TotalSalesCardDetailsTitleStyled>
    )
}