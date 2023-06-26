import { Header } from "../../_shared/Header/Layout"
import { RowCards } from "../Organisms/RowCards"

export const DashboardAnnoucementsLayout = () => {
    return (
        <>
            <Header>
                <Header.Title title="Meus anúncios" />
            </Header>
            <RowCards />
        </>
    )
}