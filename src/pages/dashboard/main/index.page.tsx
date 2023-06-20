import { Dashboard } from "../_shared/Dashboard/Layout"
import { DashboardHomeLayout } from "./Layout"

export default function DashboardHome() {
    return (
        <Dashboard selected={0}>
            <DashboardHomeLayout />
        </Dashboard>
    )
}