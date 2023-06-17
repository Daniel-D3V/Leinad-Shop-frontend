import { IconStyled } from "./styles"

type Props = {
    icon: any
}

export const Icon = ({ icon }: Props) => {
    return (
        <IconStyled>{icon}</IconStyled>
    )
}