import { WelcomeCardAvatarStyled } from "./styles"

type Props = {
    username: string,
    imageURL: string
}

export const WelcomeCardAvatar = ({ username, imageURL }: Props) => {
    return (
        <WelcomeCardAvatarStyled src={imageURL} width={50} height={50} alt={username} />
    )
}