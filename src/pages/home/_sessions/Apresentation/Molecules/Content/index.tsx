import { ContentStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const Content = ({ children }: Props) => {
    return (
        <ContentStyled md="6">{children}</ContentStyled>
    )
}