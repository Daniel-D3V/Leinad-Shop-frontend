import { ItemMenuStyled, ItemMenuLinkStyled } from "./styles"

export type ItemMenuProps = {
    icon: any,
    content: string,
    selected?: boolean,
    isDanger?: boolean,
    redirectURL?: string
}

export const ItemMenu = ({ icon, content, selected, isDanger, redirectURL }: ItemMenuProps) => {
    return (
        <ItemMenuLinkStyled href={redirectURL ?? "/dashboard"}>
            <ItemMenuStyled selected={selected} isDanger={isDanger}>{icon} {content}</ItemMenuStyled>
        </ItemMenuLinkStyled>
    )
}