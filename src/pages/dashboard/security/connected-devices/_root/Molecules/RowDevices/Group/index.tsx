import { ReactNode } from "react"
import { RowDevicesGroupStyled } from "./styles"

type RowDevicesGroupProps = {
    children: ReactNode
}

export const RowDevicesGroup = ({ children }: RowDevicesGroupProps) => {
    return (
        <RowDevicesGroupStyled md={12}>{children}</RowDevicesGroupStyled>
    )
}