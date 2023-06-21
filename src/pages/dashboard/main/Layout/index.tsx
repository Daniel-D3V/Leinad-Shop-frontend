import { RowCards } from "../Molecules/RowCards"
import { StatisticsCards } from "../Organisms/StatisticsCards"
import { TotalSalesCard } from "../Organisms/TotalSalesCard"
import { WhatsNewCard } from "../Organisms/WhatsNewCard"

export const DashboardHomeLayout = () => {
    return (
        <>
            <StatisticsCards />
            <TotalSalesCard />
            <WhatsNewCard />
        </>
    )
}