import { StatusMessageDescriptionStyled } from "./styles";
import { ReactNode } from "react";

type StatusMessageDescriptionProps = {
    children: ReactNode
}

export const StatusMessageDescription = ({ children }: StatusMessageDescriptionProps) => {
    return (
        <StatusMessageDescriptionStyled>{children}</StatusMessageDescriptionStyled>
    )
}