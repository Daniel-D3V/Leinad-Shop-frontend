import { InputHTMLAttributes } from "react"
import { InputStyled } from "./styles"

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
    return (
        <InputStyled {...props} />
    )
}