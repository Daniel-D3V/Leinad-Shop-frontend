import { WelcomeCardDetailsMessage } from "./Message"
import { WelcomeCardDetailsTitle } from "./Title"
import { WelcomeCardDetailsStyled } from "./styles"

type Props = {
    username: string
}

export const WelcomeCardDetails = ({ username }: Props) => {
    return (
        <WelcomeCardDetailsStyled>
            <WelcomeCardDetailsTitle username={username} />
            <WelcomeCardDetailsMessage />
        </WelcomeCardDetailsStyled>
    )
}