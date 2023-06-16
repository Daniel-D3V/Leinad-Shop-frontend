import React from "react"
import { SectionStyled } from "./styles"
import { Container } from "../Container"

type Props = {
    children: React.ReactNode
}

export const Section = ({ children }: Props) => {
    return (
        <SectionStyled>{children}</SectionStyled>
    )
}