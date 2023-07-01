import { Header } from "@/pages/dashboard/_shared/Header/Layout"
import { ChangePasswordSection } from "../Organisms/ChangePasswordRoot"

export const DashboardSecurityChangePasswordLayout = () => {
    return (
        <>
            <Header.Root>
                <Header.Title>Segurança - Alterar senha</Header.Title>
                <Header.Description>🐰 Dica do Ralph Coloque uma senha forte e segura para melhorar a segurança de sua conta!</Header.Description>
            </Header.Root>
            <ChangePasswordSection />
        </>
    )
}