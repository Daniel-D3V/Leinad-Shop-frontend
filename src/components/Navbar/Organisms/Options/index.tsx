import { Checkout } from "../../Molecules/Checkout";
import { Profile } from "../../Molecules/Profile";
import { Notifications } from "../../Molecules/Notifications";
import { Direction } from "./styles";

export function Options() {
    return (
        <Direction>
            <Notifications />
            <Checkout />
            <Profile />
        </Direction>
    )
}