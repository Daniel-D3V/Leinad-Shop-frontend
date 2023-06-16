import React from "react"
import { DescriptionStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export function Description({ children }: Props) {
    return (
        <DescriptionStyled>{children}</DescriptionStyled>
    )
}