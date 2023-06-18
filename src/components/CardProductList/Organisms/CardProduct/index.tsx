import { Col } from "react-bootstrap"
import { Image } from "../../Atoms/Image"
import { Title } from "../../Atoms/Title"
import { Customer } from "../../Molecules/Customer"
import { Value } from "../../Molecules/Value"
import { CardProductStyled, ColCardProductStyled } from "./styles"
import { useRouter } from 'next/router';

export type CardProductProps = {
    id: string,
    title: string,
    price: number,
    customer: {
        username: string,
        avatarURL: string
    },
    imageURL: string,
    promotion?: {
        old_value: number,
        value: number,
        discount_percentage: number
    },
    product_type: "MANUAL" | "AUTO"
}

export const CardProduct = (product: CardProductProps) => {

    const { push } = useRouter();

    const redirectPage = () => {
        push(`/announcement/${product.id}`)
    }

    return (
        <ColCardProductStyled md={3}>
            <CardProductStyled onClick={redirectPage}>
                <Image title={product.title} imageURL={product.imageURL} />
                <Title title={product.title} />
                <Value price={product.price} promotion={product.promotion} />
                <Customer username={product.customer.username} avatarURL={product.customer.avatarURL} />
            </CardProductStyled>
        </ColCardProductStyled>
    )
}