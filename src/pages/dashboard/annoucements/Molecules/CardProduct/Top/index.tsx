import { CardProductTopLeft } from "../../../Atoms/CardProduct/Top/Left"
import { CardProductTopRight } from "../../../Atoms/CardProduct/Top/Right"
import { CardProductTopStyled } from "./styles"

export const CardProductTop = () => {
    return (
        <CardProductTopStyled>
            <CardProductTopLeft />
            <CardProductTopRight />
        </CardProductTopStyled>
    )
}