import { RowCardStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const RowCard = ({ children }: Props) => {
    return (
        <RowCardStyled>{children}</RowCardStyled>
    )
}