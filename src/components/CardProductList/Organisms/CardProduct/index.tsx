import { Image } from "../../Atoms/Image"
import { Title } from "../../Atoms/Title"
import { Customer } from "../../Molecules/Customer"
import { CardProductStyles } from "./styles"

export type CardProductProps = {
    title: string,
    price: number,
    customer: {
        username: string,
        avatarURL: string
    },
    imageURL: string,
    product_type: "MANUAL" | "AUTO"
}

export const CardProduct = (product: CardProductProps) => {
    return (
        <CardProductStyles md={3}>
            <Image title={product.title} imageURL={product.imageURL} />
            <Title title={product.title} />
            <Customer username={product.customer.username} avatarURL={product.customer.avatarURL} />
        </CardProductStyles>
    )
}