import { Modal2FAHeaderTitleStyled } from "./styles"

type Modal2FAHeaderTitleProps = {
    title: string
}

export const Modal2FAHeaderTitle = ({ title }: Modal2FAHeaderTitleProps) => {
    return (
        <Modal2FAHeaderTitleStyled>{title}</Modal2FAHeaderTitleStyled>
    )
}