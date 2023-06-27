import { SlOptions } from "react-icons/sl"
import { CardProductButtonOptionsStyled } from "./styles"
import { useState } from "react";
import { CardProductOptions } from "@/pages/dashboard/annoucements/Molecules/CardProduct/Options";

export const CardProductButtonOptions = () => {

    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <CardProductButtonOptionsStyled onClick={() => { setActive(!active) }}>
                <CardProductOptions active={active} setActive={setActive} />
                <SlOptions />
            </CardProductButtonOptionsStyled>
        </>
    )
}