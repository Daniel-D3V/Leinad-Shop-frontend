import { StatisticsCardIcon } from "../../Atoms/StatisticsCard/Icon"
import { StatisticsCardStyled } from "./styles"
import { StatisticsCardDetails } from "../../Atoms/StatisticsCard/Details"
import { Col } from "react-bootstrap"

type Props = {
    icon: any,
    title: string,
    value: number,
    type?: "number" | "price"
}

export const StatisticsCard = ({ icon, title, value, type }: Props) => {
    return (
        <Col md={4}>
            <StatisticsCardStyled>
                <StatisticsCardIcon icon={icon} />
                <StatisticsCardDetails title={title} value={value} type={type} />
            </StatisticsCardStyled>
        </Col>
    )
}