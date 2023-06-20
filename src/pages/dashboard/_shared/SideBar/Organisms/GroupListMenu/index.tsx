import { Title } from "../../Atoms/Title"
import { ItemMenuProps } from "../../Molecules/ItemMenu"
import { MenuList } from "../MenuList"
import { GroupListMenuStyled } from "./styles"

export type GroupsList = {
    title: string,
    itemsMenu: ItemMenuProps[]
}

type Props = {
    groups: GroupsList[]
}

export const GroupListMenu = ({ groups }: Props) => {
    return (
        <>
            {groups.map((group, index) => (
                <GroupListMenuStyled>
                    <Title title={group.title} key={index} />
                    <MenuList itemsMenu={group.itemsMenu} key={index} />
                </GroupListMenuStyled>
            ))}
        </>
    )
}