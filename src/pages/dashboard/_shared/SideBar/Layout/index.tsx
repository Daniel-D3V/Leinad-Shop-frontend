import { FaMoneyBill, FaUserAlt, FaShoppingBasket, FaLock } from "react-icons/fa"
import { BsFillBoxFill } from "react-icons/bs"
import { SideBarStyled } from "./styles"
import { GroupListMenu, GroupsList } from "../Organisms/GroupListMenu"
import { AiFillInfoCircle } from "react-icons/ai"
import { MdLogout, MdPrivacyTip } from 'react-icons/md';

type Props = {
    selected: number
}

export const SideBar = ({ selected }: Props) => {

    const groupsListMenu: GroupsList[] = [
        {
            title: "Menu",
            itemsMenu: [
                {
                    icon: <FaUserAlt />,
                    content: "Resumo geral"
                },
                {
                    icon: <BsFillBoxFill />,
                    content: "Meus anúncios"
                },
                {
                    icon: <FaShoppingBasket />,
                    content: "Minhas vendas"
                },
                {
                    icon: <FaMoneyBill />,
                    content: "Minhas compras"
                }
            ]
        },
        {
            title: "Configurações",
            itemsMenu: [
                {
                    icon: <FaUserAlt />,
                    content: "Minha conta"
                },
                {
                    icon: <AiFillInfoCircle />,
                    content: "Informações"
                },
                {
                    icon: <MdPrivacyTip />,
                    content: "Privacidade"
                },
                {
                    icon: <FaLock />,
                    content: "Segurança"
                },
                {
                    icon: <MdLogout />,
                    content: "Sair",
                    isDanger: true
                }
            ]
        }
    ]

    let currentIndex = 0;

    const updatedGroupsListMenu = groupsListMenu.map(group => ({
        ...group,
        itemsMenu: group.itemsMenu.map((item, index) => {
            const updatedItem = {
                ...item,
                selected: currentIndex === selected
            };
            currentIndex++;
            return updatedItem;
        }),
    }));


    return (
        <SideBarStyled>
            <GroupListMenu groups={updatedGroupsListMenu} />
        </SideBarStyled>
    )
}