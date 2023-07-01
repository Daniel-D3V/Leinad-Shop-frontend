import { Header } from "@/pages/dashboard/_shared/Header/Layout"
import Link from "next/link"

export const DashboardSecurityConnectedDevicesLayout = () => {
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
        </>
    )
}