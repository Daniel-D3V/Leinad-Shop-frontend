import { CardProductBottomLeft } from "../../../Atoms/CardProduct/Bottom/Left"
import { CardProductBottomRight } from "../../../Atoms/CardProduct/Bottom/Right"
import { CardProductBottomStyled } from "./styles"

export const CardProductBottom = () => {
    return (
        <CardProductBottomStyled>
            <CardProductBottomLeft />
            <CardProductBottomRight />
        </CardProductBottomStyled>
    )
}