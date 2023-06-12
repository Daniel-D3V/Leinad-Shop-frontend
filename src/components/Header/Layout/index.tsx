import { Container } from "../Organisms/Container";
import { Logo } from "../Organisms/Logo";
import { Options } from "../Organisms/Options";
import { Header as HeaderStyled } from './styles'

export function Header() {
    return (
        <HeaderStyled>
            <Container>
                <Logo />
                <Options />
            </Container>
        </HeaderStyled>
    )
}