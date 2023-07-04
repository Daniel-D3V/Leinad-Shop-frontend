import { Modal2FAHeader } from "./Header"
import { Modal2FARootBackdropStyled, Modal2FARootStyled } from "./styles"

type Props = {
    show: boolean,
    setShow: (show: boolean) => void
}

export const Modal2FARoot = ({ show, setShow }: Props) => {
    return (
        <>
            {show && (
                <Modal2FARootBackdropStyled>
                    <Modal2FARootStyled>
                        <Modal2FAHeader onClickClose={() => { setShow(false) }} />
                        sadad
                        ada
                        sda
                        sdas
                        das
                        da
                        das
                        da
                        dasdas
                    </Modal2FARootStyled>
                </Modal2FARootBackdropStyled>
            )}
        </>
    )
}