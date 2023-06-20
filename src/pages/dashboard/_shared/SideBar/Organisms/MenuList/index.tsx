import { ItemMenu, ItemMenuProps } from "../../Molecules/ItemMenu"
import { MenuListStyled } from "./styles"

type Props = {
    itemsMenu: ItemMenuProps[]
}

export const MenuList = ({ itemsMenu }: Props) => {
    return (
        <MenuListStyled>
            {itemsMenu.map((item, index) => (
                <ItemMenu {...item} key={index} />
            ))}
        </MenuListStyled>
    )
}