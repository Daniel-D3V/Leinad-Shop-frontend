import { Description } from "../../Atoms/Description"
import { Icon } from "../../Atoms/Icon"
import { Title } from "../../Atoms/Title"
import { CardInfoStyled, ColCardInfoStyled } from "./styles"

export type CardInfoProps = {
    icon: any,
    title: string,
    description: string,
}

export const CardInfo = ({ icon, title, description }: CardInfoProps) => {
    return (
        <ColCardInfoStyled md={4}>
            <CardInfoStyled>
                <Icon icon={icon} />
                <Title title={title} />
                <Description description={description} />
            </CardInfoStyled>
        </ColCardInfoStyled>
    )
}