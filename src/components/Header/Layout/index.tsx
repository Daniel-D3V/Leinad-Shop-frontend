import { Logo } from "../Organisms/Logo";
import { Options } from "../Organisms/Options";
import { Header as HeaderStyled } from './styles'

export function Header() {
    return (
        <HeaderStyled>
            <Logo />
            <Options />
        </HeaderStyled>
    )
}