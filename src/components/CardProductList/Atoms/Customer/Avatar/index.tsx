import { AvatarStyled } from "./styles"

type Props = {
    username: string,
    avatarURL: string
}

export const CustomerAvatar = ({ username, avatarURL }: Props) => {
    return (
        <AvatarStyled src={avatarURL} alt={username} width={50} height={50} />
    )
}