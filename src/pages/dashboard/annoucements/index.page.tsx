import { Dashboard } from "../_shared/Dashboard/Layout";
import { DashboardAnnoucementsLayout } from "./Layout";

export default function DashboardAnnoucements() {
    return (
        <Dashboard selected={1}>
            <DashboardAnnoucementsLayout />
        </Dashboard>
    )
}