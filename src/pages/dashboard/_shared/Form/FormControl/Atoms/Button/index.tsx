import { ButtonHTMLAttributes } from "react"
import { ButtonStyled, ButtonSpinnerStyled } from "./styles"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
}

export const Button = (props: Props) => {
    return (
        <ButtonStyled {...props} disabled={props.isLoading}>
            {props.isLoading && (<ButtonSpinnerStyled />)}
            {props.children}
        </ButtonStyled>
    )
}