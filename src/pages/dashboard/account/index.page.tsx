import { Dashboard } from "../_shared/Dashboard/Layout";
import { DashboardAccountLayout } from "./_root/Layout";

export default function DashboardAccount() {
    return (
        <Dashboard selected={4}>
            <DashboardAccountLayout />
        </Dashboard>
    )
}