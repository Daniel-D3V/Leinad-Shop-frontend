import { DevicesCardIconStyled } from "./styles"
import { HiComputerDesktop, HiDevicePhoneMobile } from 'react-icons/hi2';

export type DevicesCardIconProps = {
    device: "laptop" | "mobile"
}

export const DevicesCardIcon = ({ device }: DevicesCardIconProps) => {
    return (
        <DevicesCardIconStyled>
            {device === "laptop" && (<HiComputerDesktop />)}
            {device === "mobile" && (<HiDevicePhoneMobile />)}
        </DevicesCardIconStyled>
    )
}