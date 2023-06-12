import { Checkout } from "../../Molecules/Checkout";
import { Menu } from "../../Molecules/Menu";
import { Notifications } from "../../Molecules/Notifications";
import { Direction } from "./styles";

export function Options() {
    return (
        <Direction>
            <Notifications />
            <Checkout />
            <Menu />
        </Direction>
    )
}