import { TitleStyled } from "./styles"

type Props = {
    children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}