import { ButtonHTMLAttributes } from "react"
import { Modal2FAHeaderButtonCloseStyled } from "./styles"

type Modal2FAHeaderButtonCloseProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Modal2FAHeaderButtonClose = (props: Modal2FAHeaderButtonCloseProps) => {
    return (
        <Modal2FAHeaderButtonCloseStyled {...props} />
    )
}