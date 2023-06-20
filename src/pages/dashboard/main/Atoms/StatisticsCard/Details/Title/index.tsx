import { StatisticsCardDetailsTitleStyled } from "./styles";

type Props = {
    title: string
}

export const StatisticsCardDetailsTitle = ({ title }: Props) => {
    return (
        <StatisticsCardDetailsTitleStyled>{title}</StatisticsCardDetailsTitleStyled>
    )
}