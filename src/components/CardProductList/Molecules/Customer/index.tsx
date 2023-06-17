import { styled } from "styled-components";
import { CustomerStyled } from "./styles";
import { Title } from "../../Atoms/Title";
import { CustomerUsername } from "../../Atoms/Customer/Username";
import { CustomerAvatar } from "../../Atoms/Customer/Avatar";

type Props = {
    username: string,
    avatarURL: string
}

export const Customer = ({ username, avatarURL }: Props) => {
    return (
        <CustomerStyled>
            <CustomerAvatar username={username} avatarURL={avatarURL} />
            <CustomerUsername username={username} />
        </CustomerStyled>
    )
}