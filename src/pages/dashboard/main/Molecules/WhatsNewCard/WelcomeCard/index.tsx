import { Col } from "react-bootstrap"
import { WelcomeCardStyled } from "./styles"
import { WelcomeCardAvatar } from "../../../Atoms/WelcomeCard/Avatar"
import { WelcomeCardDetails } from "../../../Atoms/WelcomeCard/Details"

type Props = {
    username: string,
    imageURL: string
}

export const WelcomeCard = ({ username, imageURL }: Props) => {
    return (
        <Col md={6}>
            <WelcomeCardStyled>
                <WelcomeCardAvatar username={username} imageURL={imageURL} />
                <WelcomeCardDetails username={username} />
            </WelcomeCardStyled>
        </Col>
    )
}