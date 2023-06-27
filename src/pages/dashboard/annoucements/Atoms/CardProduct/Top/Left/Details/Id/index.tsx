import { CardProductDetailsIdStyled } from "./styles"

type Props = {
    id: string
}

export const CardProductDetailsId = ({ id }: Props) => {
    return (
        <CardProductDetailsIdStyled>#{id}</CardProductDetailsIdStyled>
    )
}