import { CardDetailsTitleStyled } from "./styles"

type Props = {
    title: string
}

export const CardDetailsTitle = ({ title }: Props) => {
    return (
        <CardDetailsTitleStyled>{title}</CardDetailsTitleStyled>
    )
}