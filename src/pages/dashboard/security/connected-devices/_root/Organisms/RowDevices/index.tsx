import { Row } from "react-bootstrap"
import { RowDevicesTitle } from "../../Atoms/RowDevices/Title"
import { RowDevicesRoot } from "../../Molecules/RowDevices"
import { RowDevicesGroup } from "../../Molecules/RowDevices/Group"
import { DevicesCard, DevicesCardProps } from "../DevicesCard"
import { RowDevicesGroupRow } from "../../Molecules/RowDevices/Group/Row"

export type RowDevicesProps = {
    actual: DevicesCardProps
    others: DevicesCardProps[]
}

export const RowDevices = (props: RowDevicesProps) => {
    return (
        <RowDevicesRoot>
            <RowDevicesGroup>
                <RowDevicesTitle title="Dispositivo atual:" />
                <RowDevicesGroupRow>
                    <DevicesCard {...props.actual} />
                </RowDevicesGroupRow>
            </RowDevicesGroup>
            <RowDevicesGroup>
                <RowDevicesTitle title="Outros dispositivos:" />
                <RowDevicesGroupRow>
                    {props.others.map(device => (
                        <DevicesCard {...device} />
                    ))}
                </RowDevicesGroupRow>
            </RowDevicesGroup>
        </RowDevicesRoot>
    )
}