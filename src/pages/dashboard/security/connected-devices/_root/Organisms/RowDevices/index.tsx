import { RowDevicesTitle } from "../../Atoms/RowDevices/Title"
import { RowDevicesRoot } from "../../Molecules/RowDevices"
import { RowDevicesGroup } from "../../Molecules/RowDevices/Group"
import { DevicesCard, DevicesCardProps } from "../DevicesCard"

export type RowDevicesProps = {
    actual: DevicesCardProps
    others: DevicesCardProps[]
}

export const RowDevices = (props: RowDevicesProps) => {
    return (
        <RowDevicesRoot>
            <RowDevicesGroup>
                <RowDevicesTitle title="Dispositivo atual:" />
                <DevicesCard {...props.actual} />
            </RowDevicesGroup>
            <RowDevicesGroup>
                <RowDevicesTitle title="Outros dispositivos:" />
                {props.others.map(device => (
                    <DevicesCard {...device} />
                ))}
            </RowDevicesGroup>
        </RowDevicesRoot>
    )
}