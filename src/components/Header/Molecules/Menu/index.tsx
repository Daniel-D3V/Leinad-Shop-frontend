import { ImMenu } from "react-icons/im";
import { ButtonIcon } from "../../Atoms/ButtonIcon";
import { Avatar } from "@mui/material";
import { ButtonAvatar } from "../../Atoms/ButtonAvatar";

export function Menu() {
    return (
        <>
            <ButtonAvatar userName="Daniel" imageURL="https://cdn.discordapp.com/avatars/1091424433094275094/a_fd056fcbc879d6ac1618a6deda227747.gif?size=2048" />
            {/* <Avatar alt="Remy Sharp" src="https://cdn.discordapp.com/avatars/1091424433094275094/a_fd056fcbc879d6ac1618a6deda227747.gif?size=2048" /> */}
        </>
    )
}