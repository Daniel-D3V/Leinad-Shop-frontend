import { DiscountPercentageStyled } from "./styles"

type Props = {
    value: number;
}

export const DiscountPercentage = ({ value }: Props) => {
    return (
        <DiscountPercentageStyled>{value}% OFF</DiscountPercentageStyled>
    )
}