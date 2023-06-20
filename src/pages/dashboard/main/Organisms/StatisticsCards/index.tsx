import { FaShoppingBasket } from 'react-icons/fa';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { StatisticsCard } from '../../Molecules/StatisticsCard';
import { StatisticsCardsStyled } from "./styles"
import { BsCalendar3 } from 'react-icons/bs';

export const StatisticsCards = () => {
    return (
        <StatisticsCardsStyled>
            <StatisticsCard icon={<FaShoppingBasket />} title='Compras' value={25} />
            <StatisticsCard icon={<RiMoneyDollarBoxFill />} title='Ganhos' value={12} />
            <StatisticsCard icon={<BsCalendar3 />} title='Produtos' value={12} />
        </StatisticsCardsStyled>
    )
}