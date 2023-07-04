import { ReactNode } from "react"
import { RowDevicesGroupRowStyled } from "./styles"

type RowDevicesGroupRowProps = {
    children: ReactNode
}

export const RowDevicesGroupRow = ({ children }: RowDevicesGroupRowProps) => {
    return (
        <RowDevicesGroupRowStyled>{children}</RowDevicesGroupRowStyled>
    )
}