import { NextRequest } from "next/server";
import { Dashboard } from "../../_shared/Dashboard/Layout"
import { DashboardSecurityConnectedDevicesLayout } from "./_root/Layout"

export async function getServerSideProps({ req }: any) {

    return {
        props: {}
    }
}

export default function DashboardSecurityConnectedDevices() {
    return (
        <Dashboard selected={7}>
            <DashboardSecurityConnectedDevicesLayout />
        </Dashboard>
    )
}