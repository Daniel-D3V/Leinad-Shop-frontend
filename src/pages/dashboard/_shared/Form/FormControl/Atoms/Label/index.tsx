import { HTMLAttributes } from "react"
import { LabelRequiredStyled, LabelStyled } from "./styles"

type Props = HTMLAttributes<HTMLLabelElement> & {
    htmlFor?: string
    required?: boolean
}

export const Label = (props: Props) => {
    return (
        <LabelStyled {...props}>
            {props.children}
            {props.required && (<LabelRequiredStyled>*</LabelRequiredStyled>)}
        </LabelStyled>
    )
}