import { Dashboard } from "../_shared/Dashboard/Layout";
import { DashboardPrivacityLayout } from "./Layout";

export default function DashboardPrivacity() {
    return (
        <Dashboard selected={6}>
            <DashboardPrivacityLayout />
        </Dashboard>
    )
}