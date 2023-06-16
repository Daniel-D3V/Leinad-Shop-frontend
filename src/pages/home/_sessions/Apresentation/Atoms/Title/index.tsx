import { TitleStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export function Title({ children }: Props) {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}