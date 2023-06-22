import React from "react"
import { ContentStyled } from "./styles"

type Props = {
    children: React.ReactNode,
    active: boolean
}

export function Content({ children, active }: Props) {
    return (
        <ContentStyled active={active}>
            {children}
        </ContentStyled>
    )
}