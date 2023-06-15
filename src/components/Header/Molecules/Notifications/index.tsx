import { FaRegBell } from "react-icons/fa";
import { ButtonIconBagde } from "../../Atoms/ButtonIconBadge";

export function Notifications() {
    return (
        <ButtonIconBagde value={120} icon={<FaRegBell />} />
    )
}