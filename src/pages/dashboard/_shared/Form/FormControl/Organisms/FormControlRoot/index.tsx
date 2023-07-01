import { FormControlStyled } from "../../Layout/styles";
import { ReactNode } from "react";

type FormControlRootProps = {
    children: ReactNode
}

export const FormControlRoot = ({ children }: FormControlRootProps) => {
    return (
        <FormControlStyled>{children}</FormControlStyled>
    )
}