import { StringLiteral } from "typescript"
import { CardImageStyled } from "./styles"

type Props = {
    title: string,
    imageURL: string
}

export const CardImage = ({ title, imageURL }: Props) => {
    return (
        <CardImageStyled src={imageURL} width={250} height={250} alt={title} />
    )
}