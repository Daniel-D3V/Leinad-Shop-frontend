import { FaRegBell } from "react-icons/fa";
import { ButtonIconBagde } from "../../Atoms/ButtonIconBadge";
import { DropDown } from "../../Atoms/ButtonDropdown";

export function Notifications() {
    return (
        <DropDown>
            <DropDown.ButtonToggle icon={<FaRegBell />} />
            {/* <DropDown.Content>Hello</DropDown.Content> */}
        </DropDown>
    )
}