import { AboutStyled } from "./styles";

type Props = {
    children: React.ReactNode
}

export const About = ({ children }: Props) => {
    return (
        <AboutStyled>{children}</AboutStyled>
    )
}