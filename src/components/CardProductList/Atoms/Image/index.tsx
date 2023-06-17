import { ImageStyled } from "./styles"

type Props = {
    title: string,
    imageURL: string
}

export const Image = ({ title, imageURL }: Props) => {
    return (
        <ImageStyled src={imageURL} alt={title} width={1080} height={1080} />
    )
}