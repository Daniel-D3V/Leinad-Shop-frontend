import { StatisticsCardIconStyled } from "./styles"

type Props = {
    icon: any
}

export const StatisticsCardIcon = ({ icon }: Props) => {
    return (
        <StatisticsCardIconStyled>{icon}</StatisticsCardIconStyled>
    )
}