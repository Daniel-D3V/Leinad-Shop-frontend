import { ReactNode } from "react"
import { StatusMessageTitleStyled } from "./styles"

type StatusMessageTitleProps = {
    children: ReactNode
}

export const StatusMessageTitle = ({ children }: StatusMessageTitleProps) => {
    return (
        <StatusMessageTitleStyled>{children}</StatusMessageTitleStyled>
    )
}