import { UsernameStyled } from "./styles"

type Props = {
    username: string;
}

export const CustomerUsername = ({ username }: Props) => {
    return (
        <UsernameStyled>{username}</UsernameStyled>
    )
}