import { RowCardsStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const RowCards = ({ children }: Props) => {
    return (
        <RowCardsStyled>{children}</RowCardsStyled>
    )
}