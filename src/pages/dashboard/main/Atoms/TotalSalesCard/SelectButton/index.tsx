import { ButtonHTMLAttributes } from "react"
import { TotalSalesCardSelectButtonStyled } from "./styles"

type TotalSalesCardSelectButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const TotalSalesCardSelectButton = (props: TotalSalesCardSelectButtonProps) => {
    return (
        <TotalSalesCardSelectButtonStyled {...props}>📅 Selecionar</TotalSalesCardSelectButtonStyled>
    )
}