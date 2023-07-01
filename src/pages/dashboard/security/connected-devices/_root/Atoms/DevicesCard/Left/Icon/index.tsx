import { DevicesCardIconStyled } from "./styles"
import { HiComputerDesktop, HiDevicePhoneMobile } from 'react-icons/hi2';

type DevicesCardIconProps = {
    application: "laptop" | "mobile"
}

export const DevicesCardIcon = ({ application }: DevicesCardIconProps) => {
    return (
        <DevicesCardIconStyled>
            {application === "laptop" && (<HiComputerDesktop />)}
            {application === "laptop" && (<HiDevicePhoneMobile />)}
        </DevicesCardIconStyled>
    )
}