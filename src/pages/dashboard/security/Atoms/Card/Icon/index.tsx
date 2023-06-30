import { CardIconStyled } from "./styles"

type Props = {
    icon: any
}

export const CardIcon = ({ icon }: Props) => {
    return (
        <CardIconStyled>{icon}</CardIconStyled>
    )
}