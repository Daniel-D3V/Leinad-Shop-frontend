import { DevicesCardDetails } from "../../Atoms/DevicesCard/Left/Details"
import { DevicesCardIcon } from "../../Atoms/DevicesCard/Left/Icon"
import { DevicesCardRoot } from "../../Molecules/DevicesCard"
import { DevicesCardLeft } from "../../Molecules/DevicesCard/Left"
import { DevicesCardRight } from "../../Molecules/DevicesCard/Right"

export const DevicesCard = () => {
    return (
        <DevicesCardRoot>
            <DevicesCardLeft>
                <DevicesCardIcon application="laptop" />
                <DevicesCardDetails application="chrome" city="Centralina" contry="Brazil" state="Minas Gerais" system="windows" />
            </DevicesCardLeft>
            <DevicesCardRight>

            </DevicesCardRight>
        </DevicesCardRoot>
    )
}