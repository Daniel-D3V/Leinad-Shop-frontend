import { CardProductDetailsTitleStyled } from "./styles"

type Props = {
    title: string
}

export const CardProductDetailsTitle = ({ title }: Props) => {
    return (
        <CardProductDetailsTitleStyled>{title}</CardProductDetailsTitleStyled>
    )
}