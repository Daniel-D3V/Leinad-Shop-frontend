import { CardProductStatus } from "./Status"
import { CardProductSales } from './Sales';
import { CardProductBottomLeftStyled } from "./styles"
import { CardProductSeparator } from "./Separator";

export const CardProductBottomLeft = () => {
    return (
        <CardProductBottomLeftStyled>
            <CardProductStatus status="ACTIVE" />
            <CardProductSeparator />
            <CardProductSales sales={25} />
        </CardProductBottomLeftStyled>
    )
}