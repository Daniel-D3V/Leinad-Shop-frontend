import { CardDetailsDescriptionStyled } from "./styles"

type Props = {
    description: string
}

export const CardDetailsDescription = ({ description }: Props) => {
    return (
        <CardDetailsDescriptionStyled>{description}</CardDetailsDescriptionStyled>
    )
}