import { TitleStyled } from "./styles"

type Props = {
    title: string;
}

export const Title = ({ title }: Props) => {
    return (
        <TitleStyled>{title}</TitleStyled>
    )
}