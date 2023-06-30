import { ButtonHTMLAttributes } from "react"
import { ButtonStyled } from "./styles"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
    return (
        <ButtonStyled {...props} />
    )
}