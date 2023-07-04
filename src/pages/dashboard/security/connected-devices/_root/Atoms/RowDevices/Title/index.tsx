import { RowDevicesTitleStyled } from "./styles"

type RowDevicesTitleProps = {
    title: string
}

export const RowDevicesTitle = ({ title }: RowDevicesTitleProps) => {
    return (
        <RowDevicesTitleStyled>{title}</RowDevicesTitleStyled>
    )
}