import { Dashboard } from "../_shared/Dashboard/Layout";
import { DashboardInformationLayout } from "./Layout";

export default function DashboardInformation() {
    return (
        <Dashboard selected={5}>
            <DashboardInformationLayout />
        </Dashboard>
    )
}