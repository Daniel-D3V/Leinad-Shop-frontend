import { UpdatesCard } from "../../Molecules/WhatsNewCard/UpdatesCard"
import { WelcomeCard } from "../../Molecules/WhatsNewCard/WelcomeCard"
import { WhatsNewCardStyled } from "./styles"

export const WhatsNewCard = () => {
    return (
        <WhatsNewCardStyled>
            <WelcomeCard username="Daniel Silva" imageURL="https://cdn.discordapp.com/avatars/1091424433094275094/a_fd056fcbc879d6ac1618a6deda227747.gif?size=2048" />
            <UpdatesCard />
        </WhatsNewCardStyled>
    )
}