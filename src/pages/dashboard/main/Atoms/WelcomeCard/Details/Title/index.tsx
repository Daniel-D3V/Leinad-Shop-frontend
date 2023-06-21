import { WelcomeCardDetailsTitleStyled } from "./styles"

type Props = {
    username: string
}

export const WelcomeCardDetailsTitle = ({ username }: Props) => {
    return (
        <WelcomeCardDetailsTitleStyled>Olá {username}👋</WelcomeCardDetailsTitleStyled>
    )
}