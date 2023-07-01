import { FaLock, FaLaptop } from "react-icons/fa"
import { Header } from "../../../_shared/Header/Layout"
import { CardProps } from "../Molecules/Card"
import { RowCards } from "../Organisms/RowCards"
import { BsGoogle } from "react-icons/bs"

export const DashboardSecurityLayout = () => {

    const cards: CardProps[] = [
        {
            title: "Authentificação em duas etapas (RECOMENDADO)",
            description: "Autenticação em duas etapas (2FA) é uma verificação de segurança adicional para sua conta, desenvolvida pelo Google.",
            icon: BsGoogle,
            redirectURL: "/dashboard/security/2fa"
        },
        {
            title: "Alterar senha",
            icon: FaLock,
            redirectURL: "/dashboard/security/change-password"
        },
        {
            title: "Dispositivos conectados",
            icon: FaLaptop,
            redirectURL: "/dashboard/security/change-password"
        }
    ]

    return (
        <>
            <Header.Root>
                <Header.Title>Segurança</Header.Title>
            </Header.Root>
            <RowCards cards={cards} />
        </>
    )
}