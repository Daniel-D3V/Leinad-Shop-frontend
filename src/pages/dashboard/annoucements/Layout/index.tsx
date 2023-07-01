import { Header } from "../../_shared/Header/Layout"
import { RowCards } from "../Organisms/RowCards"

export const DashboardAnnoucementsLayout = () => {
    return (
        <>
            <Header.Root>
                <Header.Title>Meus anúncios</Header.Title>
            </Header.Root>
            <RowCards />
        </>
    )
}