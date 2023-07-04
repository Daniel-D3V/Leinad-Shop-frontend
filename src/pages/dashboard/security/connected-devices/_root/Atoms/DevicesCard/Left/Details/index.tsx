import { DevicesCardDeviceProps } from "./Device"
import { DevicesCardDevice } from "./Device";
import { DevicesCardLocalization, DevicesCardLocalizationProps } from "./Localization"
import { DeviceCardDetailsStyled } from "./styles"

export type DevicesCardDetailsProps = DevicesCardLocalizationProps & DevicesCardDeviceProps

export const DevicesCardDetails = (props: DevicesCardDetailsProps) => {
    return (
        <DeviceCardDetailsStyled>
            <DevicesCardDevice {...props} />
            <DevicesCardLocalization {...props} />
        </DeviceCardDetailsStyled>
    )
}