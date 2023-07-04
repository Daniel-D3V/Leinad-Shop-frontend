import { DevicesCardDetails, DevicesCardDetailsProps } from "../../Atoms/DevicesCard/Left/Details"
import { DevicesCardIcon, DevicesCardIconProps } from "../../Atoms/DevicesCard/Left/Icon"
import { DevicesCardRoot } from "../../Molecules/DevicesCard"
import { DevicesCardLeft } from "../../Molecules/DevicesCard/Left"
import { DevicesCardRight } from "../../Molecules/DevicesCard/Right"

export type DevicesCardProps = DevicesCardDetailsProps & DevicesCardIconProps

export const DevicesCard = (props: DevicesCardProps) => {
    return (
        <DevicesCardRoot>
            <DevicesCardLeft>
                <DevicesCardIcon {...props} />
                <DevicesCardDetails {...props} />
            </DevicesCardLeft>
            <DevicesCardRight>

            </DevicesCardRight>
        </DevicesCardRoot>
    )
}