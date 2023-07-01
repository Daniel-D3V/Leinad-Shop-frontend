import { ReactNode } from "react"
import { DevicesCardRootStyled } from "./styles"

type DevicesCardRootProps = {
    children: ReactNode
}

export const DevicesCardRoot = ({ children }: DevicesCardRootProps) => {
    return (
        <DevicesCardRootStyled>{children}</DevicesCardRootStyled>
    )
}