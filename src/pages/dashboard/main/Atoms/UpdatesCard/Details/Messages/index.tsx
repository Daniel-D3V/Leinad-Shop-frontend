import { useEffect, useState } from "react";
import { UpdatesCardDetailsMessagesStyled } from "./styles";

export const UpdatesCardDetailsMessages = () => {
    const updates_array = ['🎨 Novo design atualizado', '📱 Novos recursos', '😍 Novas funcionalidades para vendedores'];

    const [actualMessage, setActualMessage] = useState(updates_array[0]);

    const [index, setIndex] = useState(1);

    useEffect(() => {
        let interval = setInterval(() => {
            setActualMessage(updates_array[index])
            setIndex(index + 1 >= updates_array.length ? 0 : index + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <UpdatesCardDetailsMessagesStyled key={actualMessage}>{actualMessage}</UpdatesCardDetailsMessagesStyled>
    )
}