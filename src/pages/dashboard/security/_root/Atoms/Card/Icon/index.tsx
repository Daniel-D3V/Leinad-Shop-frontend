import { ElementType } from "react"
import { CardIconStyled } from "./styles"

type Props = {
    icon: ElementType
}

export const CardIcon = ({ icon: Icon }: Props) => {
    return (
        <CardIconStyled>
            <Icon />
        </CardIconStyled>
    )
}