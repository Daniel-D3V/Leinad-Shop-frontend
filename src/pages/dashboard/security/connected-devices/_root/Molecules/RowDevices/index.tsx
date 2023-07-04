import { ReactNode } from "react"
import { RowDevicesRootStyled } from "./styles"

type RowDevicesRootProps = {
    children: ReactNode
}

export const RowDevicesRoot = ({ children }: RowDevicesRootProps) => {
    return (
        <RowDevicesRootStyled>{children}</RowDevicesRootStyled>
    )
}