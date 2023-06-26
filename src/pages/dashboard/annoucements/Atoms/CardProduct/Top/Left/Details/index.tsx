import { CardProductDetailsId } from "./Id"
import { CardProductDetailsTitle } from "./Title"
import { CardProductDetailsStyled } from "./styles"

type Props = {
    title: string,
    id: string
}

export const CardProductDetails = ({ id, title }: Props) => {
    return (
        <CardProductDetailsStyled>
            <CardProductDetailsTitle title={title} />
            <CardProductDetailsId id={id} />
        </CardProductDetailsStyled>
    )
}