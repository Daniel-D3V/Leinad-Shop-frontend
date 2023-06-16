import { Badge } from "@mui/material";
import { ButtonIcon } from "../ButtonIcon";

type Props = {
    value: number;
    icon: any
}

export function ButtonIconBagde({ value, icon }: Props) {
    return (
        <Badge badgeContent={value > 99 ? "+99" : value} color="primary">
            <ButtonIcon icon={icon} />
        </Badge>
    )
}