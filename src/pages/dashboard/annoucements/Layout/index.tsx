import { Header } from "../../_shared/Header/Layout"
import { RowCards } from "../Organisms/RowCards"

export const DashboardAnnoucementsLayout = () => {
    return (
        <>
            <Header>
                <Header.Title>Meus anúncios</Header.Title>
            </Header>
            <RowCards />
        </>
    )
}