import { FaMoneyBill, FaUserAlt, FaShoppingBasket, FaLock } from "react-icons/fa"
import { BsFillBoxFill } from "react-icons/bs"
import { SideBarStyled } from "./styles"
import { GroupListMenu, GroupsList } from "../Organisms/GroupListMenu"
import { AiFillInfoCircle } from "react-icons/ai"
import { MdPrivacyTip } from 'react-icons/md';

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
                    content: "Resumo geral",
                    selected: false
                },
                {
                    icon: <BsFillBoxFill />,
                    content: "Meus anúncios",
                    selected: false
                },
                {
                    icon: <FaShoppingBasket />,
                    content: "Minhas vendas",
                    selected: false
                },
                {
                    icon: <FaMoneyBill />,
                    content: "Minhas compras",
                    selected: false
                }
            ]
        },
        {
            title: "Configurações",
            itemsMenu: [
                {
                    icon: <FaUserAlt />,
                    content: "Minha conta",
                    selected: false
                },
                {
                    icon: <AiFillInfoCircle />,
                    content: "Informações",
                    selected: false
                },
                {
                    icon: <MdPrivacyTip />,
                    content: "Privacidade",
                    selected: false
                },
                {
                    icon: <FaLock />,
                    content: "Segurança",
                    selected: false
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