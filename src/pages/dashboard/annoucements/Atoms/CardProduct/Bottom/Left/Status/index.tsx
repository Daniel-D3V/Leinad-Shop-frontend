import { CardProductStatusStyled } from "./styles"
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export type CardProductStatusProps = {
    status: "ACTIVE" | "DISABLED"
}

export const CardProductStatus = ({ status }: CardProductStatusProps) => {
    return (
        <CardProductStatusStyled status={status}>
            {status === "ACTIVE" && (<><HiOutlineCheckCircle /> Ativo</>)}
            {status === "DISABLED" && (<><AiOutlineCloseCircle /> Em analise</>)}
        </CardProductStatusStyled>
    )
}