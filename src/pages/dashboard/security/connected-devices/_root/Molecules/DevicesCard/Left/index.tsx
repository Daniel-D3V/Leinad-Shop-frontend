import { ReactNode } from "react"
import { DevicesCardDetails, DevicesCardDetailsProps } from "../../../Atoms/DevicesCard/Left/Details"
import { DevicesCardLeftStyled } from "./styles"

type DevicesCardLeftProps = {
    children: ReactNode
}

export const DevicesCardLeft = ({ children }: DevicesCardLeftProps) => {
    return (
        <DevicesCardLeftStyled>{children}</DevicesCardLeftStyled>
    )
}