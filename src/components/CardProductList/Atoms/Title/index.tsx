import { TitleStyled } from "./styles"

type Props = {
    title: string
}

export const Title = ({ title }: Props) => {
    return (
        <TitleStyled title={title}>
            {title.length > 63 ? title.slice(0, 63) + '...' : title}
        </TitleStyled>
    )
}