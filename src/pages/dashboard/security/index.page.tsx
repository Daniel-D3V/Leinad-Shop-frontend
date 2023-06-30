import { Dashboard } from "../_shared/Dashboard/Layout";
import { DashboardSecurityLayout } from "./Layout";

export default function DashboardSecurity() {
    return (
        <Dashboard selected={7}>
            <DashboardSecurityLayout />
        </Dashboard>
    )
}