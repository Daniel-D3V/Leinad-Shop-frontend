import { ButtonIcon } from "../ButtonIcon";
import { BadgeStyled, ButtonIconBagdeStyled } from "./styles";

type Props = {
    value: number;
    icon: any
}

export function ButtonIconBagde({ value, icon }: Props) {
    return (
        <ButtonIconBagdeStyled>
            <ButtonIcon icon={icon} />
            <BadgeStyled>{value > 99 ? "+99" : value}</BadgeStyled>
        </ButtonIconBagdeStyled>
    )
}