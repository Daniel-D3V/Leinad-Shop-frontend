import { ReactNode } from "react"
import { StatusMessageRootStyled } from "./styles"

type StatusMessageRootProps = {
    children: ReactNode
}

export const StatusMessageRoot = ({ children }: StatusMessageRootProps) => {
    return (
        <StatusMessageRootStyled>{children}</StatusMessageRootStyled>
    )
}