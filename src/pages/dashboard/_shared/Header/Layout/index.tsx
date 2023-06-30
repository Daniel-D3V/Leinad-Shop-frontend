import { Description } from "../Atoms/Description"
import { Title } from "../Atoms/Title"
import { HeaderStyled } from "./styles"

type Props = {
    children: React.ReactNode,
    direction?: "left" | "center" | "right"
}

const Header = ({ children, direction = "left" }: Props) => {
    return (
        <HeaderStyled direction={direction}>{children}</HeaderStyled>
    )
}

Header.Title = Title
Header.Description = Description

export { Header };