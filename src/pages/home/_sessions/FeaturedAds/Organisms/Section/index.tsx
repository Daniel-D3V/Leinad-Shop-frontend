import React from "react"
import { SectionStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const Section = ({ children }: Props) => {
    return (
        <SectionStyled>{children}</SectionStyled>
    )
}