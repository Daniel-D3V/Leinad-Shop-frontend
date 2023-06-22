import { FaBell, FaRegBell } from "react-icons/fa";
import { ButtonIconBagde } from "../../Atoms/ButtonIconBadge";
import { DropDown } from "../../Atoms/ButtonDropdown";

export function Notifications() {
    return (
        <ButtonIconBagde icon={<FaRegBell />} value={5} />
    )
}