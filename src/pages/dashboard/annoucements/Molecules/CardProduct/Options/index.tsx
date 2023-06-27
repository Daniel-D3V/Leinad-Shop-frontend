import { FaEdit } from "react-icons/fa"
import { CardProductOptionsButton } from "../../../Atoms/CardProduct/Options/Button"
import { CardProductOptionsStyled } from "./styles"
import { BsShare } from "react-icons/bs"
import { MdDelete } from "react-icons/md"

type Props = {
    active: boolean,
    setActive: (status: boolean) => void
}

export const CardProductOptions = ({ active, setActive }: Props) => {
    return (
        <>
            {active && (
                <CardProductOptionsStyled>
                    <CardProductOptionsButton icon={<FaEdit />} content="Editar" onClick={() => { }} />
                    <CardProductOptionsButton icon={<BsShare />} content="Compartilhar" onClick={() => { }} />
                    <CardProductOptionsButton icon={<MdDelete />} content="Deletar" onClick={() => { }} />
                </CardProductOptionsStyled>
            )}
        </>
    )
}