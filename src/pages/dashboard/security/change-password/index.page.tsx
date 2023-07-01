import { Dashboard } from "../../_shared/Dashboard/Layout";
import { DashboardSecurityChangePasswordLayout } from "./_root/Layout";

export default function DashboardSecurityChangePassword() {
    return (
        <Dashboard selected={7}>
            <DashboardSecurityChangePasswordLayout />
        </Dashboard>
    )
}