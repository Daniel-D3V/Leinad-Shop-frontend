import { ContainerStyled } from "./styles"
import React from "react"

type Props = {
    children: React.ReactNode
}

export const Container = ({ children }: Props) => {
    return (
        <ContainerStyled>{children}</ContainerStyled>
    )
}