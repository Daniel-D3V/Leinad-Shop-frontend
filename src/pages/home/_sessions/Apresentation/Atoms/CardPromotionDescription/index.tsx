import { CardPromotionDescriptionStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const CardPromotionDescription = ({ children }: Props) => {
    return (
        <CardPromotionDescriptionStyled>{children}</CardPromotionDescriptionStyled>
    )
}