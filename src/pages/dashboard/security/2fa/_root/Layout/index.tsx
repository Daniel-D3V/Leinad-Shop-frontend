import { Header } from "@/pages/dashboard/_shared/Header/Layout"
import { StatusMessage } from "../Organisms/StatusMessage"
import { StatusMessageButton } from "../Atoms/StatusMessage/Button"

export const DashboardSecurity2FALayout = () => {
    return (
        <>
            <Header>
                <Header.Title>Segurança - Autentificação 2FA</Header.Title>
            </Header>
            <StatusMessage.Root>
                <StatusMessage.Title>Verificação em duas etapas</StatusMessage.Title>
                <StatusMessage.Description>Proteja sua conta da Leinad Shop com uma camada extra de segurança. Uma vez configurada, serão nescessários tanto a senha quanto um código de verificação de seu dispositivo móvel para entrar.</StatusMessage.Description>
                <StatusMessageButton>Ativar verificação em duas etapas</StatusMessageButton>
            </StatusMessage.Root>
        </>
    )
}