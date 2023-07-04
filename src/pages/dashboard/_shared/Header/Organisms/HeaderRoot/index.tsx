import { ReactNode } from "react"
import { HeaderRootStyled } from "./styles"

type HeaderRootProps = {
    children: ReactNode,
    direction?: "left" | "center" | "right"
}

export const HeaderRoot = ({ children, direction = "left" }: HeaderRootProps) => {
    return (
        <HeaderRootStyled direction={direction}>{children}</HeaderRootStyled>
    )
}