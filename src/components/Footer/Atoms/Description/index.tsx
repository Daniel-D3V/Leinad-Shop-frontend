import { DescriptionStyled } from "./styles"

type Props = {
    description: string
}

export const Description = ({ description }: Props) => {
    return (
        <DescriptionStyled>{description}</DescriptionStyled>
    )
}