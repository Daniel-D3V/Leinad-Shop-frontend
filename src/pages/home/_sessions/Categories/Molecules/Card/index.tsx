import { CardImage } from "../../Atoms/CardImage"
import { CardTitle } from "../../Atoms/CardTitle"
import { CardStyled } from "./styles"

type Props = {
    title: string,
    imageURL: string
}

export const Card = ({ title, imageURL }: Props) => {
    return (
        <CardStyled md={2}>
            <CardImage imageURL={imageURL} title={title} />
            <CardTitle title={title} />
        </CardStyled>
    )
}