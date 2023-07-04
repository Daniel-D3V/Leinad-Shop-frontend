import { Header } from "@/pages/dashboard/_shared/Header/Layout"
import Link from "next/link"
import { DevicesCard } from "../Organisms/DevicesCard"
import { RowDevices, RowDevicesProps } from "../Organisms/RowDevices"

export const DashboardSecurityConnectedDevicesLayout = () => {

    const devices: RowDevicesProps = {
        actual: {
            contry: "Brazil",
            state: "Minas gerais",
            city: "Centralina",
            system: "windows",
            application: "chrome",
            device: "laptop"
        },
        others: [
            {
                contry: "Brazil",
                state: "São paulo",
                city: "Osasco",
                system: "android",
                application: "application",
                device: "mobile",
                date: new Date()
            },
            {
                contry: "Brazil",
                state: "São paulo",
                city: "Osasco",
                system: "linux",
                application: "chrome",
                device: "laptop",
                date: new Date()
            }
        ]
    }

    return (
        <>
            <Header.Root>
                <Header.Title>Segurança - Dispositivos</Header.Title>
                <Header.Description>
                    Aqui estão todos os dispositivos conectados à sua conta da Leinad Shop. Você pode sair de cada um indivudalmente, ou todos os outros ao mesmo tempo.
                    <br />
                    <br />
                    🐰 Dica do Ralph: Se você não reconhecer algum dispositivo logado em sua conta, <Link href="/dashboard/security/change-password">mude a senha</Link> imediatamente.
                </Header.Description>
            </Header.Root>
            <RowDevices {...devices} />
        </>
    )
}