import { ButtonHTMLAttributes } from "react"
import { StatusMessageButtonStyled } from "./styles"

type StatusMessageButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const StatusMessageButton = (props: StatusMessageButtonProps) => {
    return (
        <StatusMessageButtonStyled {...props} />
    )
}