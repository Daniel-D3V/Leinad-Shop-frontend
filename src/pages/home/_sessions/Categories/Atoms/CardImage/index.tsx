import { StringLiteral } from "typescript"
import { CardImageStyled } from "./styles"

type Props = {
    title: string,
    imageURL: string
}

export const CardImage = ({ title, imageURL }: Props) => {
    return (
        <CardImageStyled src={imageURL} width={1080} height={1080} alt={title} />
    )
}