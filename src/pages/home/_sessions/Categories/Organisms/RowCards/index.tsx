import { Card } from "../../Molecules/Card"
import { RowCardStyled } from "./styles"

type Props = {
    categories: { title: string, imageURL: string }[]
}

export const RowCard = ({ categories }: Props) => {
    return (
        <RowCardStyled>
            {categories.map(category => (
                <Card title={category.title} imageURL={category.imageURL} />
            ))}
        </RowCardStyled>
    )
}