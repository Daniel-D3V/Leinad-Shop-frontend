import { ItemMenuStyled } from "./styles"

export type ItemMenuProps = {
    icon: any,
    content: string,
    selected: boolean
}

export const ItemMenu = ({ icon, content, selected }: ItemMenuProps) => {
    return (
        <ItemMenuStyled selected={selected}>{icon} {content}</ItemMenuStyled>
    )
}