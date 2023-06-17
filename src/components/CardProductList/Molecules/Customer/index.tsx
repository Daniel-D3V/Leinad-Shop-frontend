import { styled } from "styled-components";
import { CustomerStyled } from "./styles";
import { Title } from "../../Atoms/Title";
import { CustomerUsername } from "../../Atoms/Customer/Username";
import { CustomerTitle } from "../../Atoms/Customer/Title";

type Props = {
    username: string,
    avatarURL: string
}

export const Customer = ({ username, avatarURL }: Props) => {
    return (
        <CustomerStyled>
            <CustomerTitle title="Vendido por:" />
            <CustomerUsername username={username} />
        </CustomerStyled>
    )
}