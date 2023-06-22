import { Container } from "../Organisms/Container";
import { Logo } from "../Molecules/Logo";
import { Options } from "../Organisms/Options";
import { NavbarStyled } from './styles'

export function Navbar() {
    return (
        <NavbarStyled>
            <Container>
                <Logo />
                <Options />
            </Container>
        </NavbarStyled>
    )
}