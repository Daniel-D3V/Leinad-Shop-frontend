import { Title } from "../Atoms/Title"
import { HeaderStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

const Header = ({ children }: Props) => {
    return (
        <HeaderStyled>{children}</HeaderStyled>
    )
}

Header.Title = Title

export { Header };