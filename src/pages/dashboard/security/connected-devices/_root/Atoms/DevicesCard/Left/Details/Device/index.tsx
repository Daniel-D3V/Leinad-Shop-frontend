import { DevicesCardDeviceApplicationStyled, DevicesCardDeviceStyled, DevicesCardDeviceSeparatorStyled } from "./styles"

export type DevicesCardDeviceProps = {
    system: "windows" | "linux" | "android" | "ios",
    application: "chrome" | "application"
}

export const DevicesCardDevice = ({ system, application }: DevicesCardDeviceProps) => {
    return (
        <DevicesCardDeviceStyled>
            {system.toUpperCase()}
            <DevicesCardDeviceSeparatorStyled />
            <DevicesCardDeviceApplicationStyled>{application === "application" ? "Leinad Shop - Aplicativo" : application.toUpperCase()}</DevicesCardDeviceApplicationStyled>
        </DevicesCardDeviceStyled>
    )
}