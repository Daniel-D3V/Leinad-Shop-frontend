import { RowCards } from "../Molecules/RowCards"
import { StatisticsCards } from "../Organisms/StatisticsCards"
import { TotalSalesCard } from "../Organisms/TotalSalesCard"

export const DashboardHomeLayout = () => {
    return (
        <>
            <StatisticsCards />
            <TotalSalesCard />
            {/* <RowCards>
                aq
            </RowCards> */}
        </>
    )
}