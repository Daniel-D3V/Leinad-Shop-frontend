import { CardProductImageStyled } from "./styles"

type Props = {
    title: string,
    imageURL: string
}

export const CardProductImage = ({ title, imageURL }: Props) => {
    return (
        <CardProductImageStyled src={imageURL} width={1080} height={1080} alt={title} />
    )
}