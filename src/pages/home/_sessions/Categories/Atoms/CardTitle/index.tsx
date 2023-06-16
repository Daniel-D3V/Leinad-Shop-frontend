import { CardTitleStyled } from "./styles"

type Props = {
    title: string
}

export const CardTitle = ({ title }: Props) => {
    return (
        <CardTitleStyled>{title}</CardTitleStyled>
    )
}