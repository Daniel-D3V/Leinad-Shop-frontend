import { Header, Container } from "./styles";
import { Logo } from "../Logo";
import { Menu } from "../Menu";

export function Base() {
    return (
        <Header>
            <Container>
                <Logo />
                <Menu />
            </Container>
        </Header>
    )
}