import Link from "next/link"
import { ItemMenuStyled } from "./styles"

export type ItemMenuProps = {
    icon: any,
    content: string,
    selected?: boolean,
    isDanger?: boolean,
    redirectURL?: string
}

export const ItemMenu = ({ icon, content, selected, isDanger, redirectURL }: ItemMenuProps) => {
    return (
        <ItemMenuStyled selected={selected} isDanger={isDanger}>{icon} {content}</ItemMenuStyled>
    )
}