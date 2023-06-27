import { styled } from "styled-components";
import { CardProductOptionsButtonStyled } from "./styles";

type Props = {
    icon: any,
    content: string,
    onClick: () => void
}

export const CardProductOptionsButton = ({ icon, content, onClick }: Props) => {
    return (
        <CardProductOptionsButtonStyled onClick={onClick}>
            {icon}
            {content}
        </CardProductOptionsButtonStyled>
    )
}