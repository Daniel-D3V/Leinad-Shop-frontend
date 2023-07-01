import { DevicesCardDeviceStyled } from "./styles"

type DevicesCardDeviceProps = {
    system: "windows" | "linux" | "android" | "ios",
    application: "chrome" | "application"
}

export const DevicesCardDevice = ({ system, application }: DevicesCardDeviceProps) => {
    return (
        <DevicesCardDeviceStyled>
            {system.toUpperCase()}
            {application === "application" ? "Leinad Shop - Aplicativo" : application.toUpperCase()}
        </DevicesCardDeviceStyled>
    )
}