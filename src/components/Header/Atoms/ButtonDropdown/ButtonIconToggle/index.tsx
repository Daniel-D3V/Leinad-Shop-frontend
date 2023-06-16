import { ButtonIcon } from "../../ButtonIcon"

type Props = {
    icon?: any,
    onClick?: () => void
}

export const ButtonIconToggle = ({ icon, onClick }: Props) => {
    return (
        <ButtonIcon icon={icon} onClick={onClick} />
    )
}