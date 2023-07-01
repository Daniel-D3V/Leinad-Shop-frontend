import { IoClose } from "react-icons/io5"
import { Modal2FAHeaderButtonClose } from "../../../Atoms/Modal2FA/Header/ButtonClose"
import { Modal2FAHeaderTitle } from "../../../Atoms/Modal2FA/Header/Title"
import { Modal2FAHeaderStyled } from "./styles"

type Modal2FAHeaderProps = {
    onClickClose?: () => void
}

export const Modal2FAHeader = ({ onClickClose }: Modal2FAHeaderProps) => {
    return (
        <Modal2FAHeaderStyled>
            <Modal2FAHeaderTitle title="Autentificação 2FA" />
            <Modal2FAHeaderButtonClose onClick={onClickClose}><IoClose /></Modal2FAHeaderButtonClose>
        </Modal2FAHeaderStyled>
    )
}