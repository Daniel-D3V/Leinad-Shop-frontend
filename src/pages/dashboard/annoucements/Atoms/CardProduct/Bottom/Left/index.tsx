import { CardProductStatus } from "./Status"
import { CardProductBottomLeftStyled } from "./styles"

export const CardProductBottomLeft = () => {
    return (
        <CardProductBottomLeftStyled>
            <CardProductStatus status="ACTIVE" />
        </CardProductBottomLeftStyled>
    )
}