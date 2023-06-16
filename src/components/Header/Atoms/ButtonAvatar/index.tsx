import { Avatar } from "@mui/material"
import { ButtonStyled, OnlineIconStyled } from "./styles"

type Props = {
    userName: string,
    imageURL: string
}

export const ButtonAvatar = ({ userName, imageURL }: Props) => {
    return (
        <ButtonStyled>
            <Avatar alt={userName} src={imageURL} />
            <OnlineIconStyled />
        </ButtonStyled>
    )
}