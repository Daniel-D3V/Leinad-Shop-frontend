import { Dashboard } from "../../_shared/Dashboard/Layout";
import { DashboardSecurity2FALayout } from "./_root/Layout";

export default function DashboardSecurity2FA() {
    return (
        <Dashboard selected={7}>
            <DashboardSecurity2FALayout />
        </Dashboard>
    )
}