import { DevicesCardDeviceProps } from "./Device"
import { DevicesCardDeviceStyled } from "./Device/styles"
import { DevicesCardLocalization, DevicesCardLocalizationProps } from "./Localization"

type DevicesCardDetailsProps = DevicesCardLocalizationProps & DevicesCardDeviceProps

export const DevicesCardDetails = (props: DevicesCardDetailsProps) => {
    return (
        <DevicesCardDeviceStyled>
            <DevicesCardDevice {...props} />
            <DevicesCardLocalization {...props} />
        </DevicesCardDeviceStyled>
    )
}