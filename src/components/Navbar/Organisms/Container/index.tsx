import { ContainerStyled } from "./styles";

type Props = {
    children: React.ReactNode
}

export function Container({ children }: Props) {
    return (
        <ContainerStyled>{children}</ContainerStyled>
    )
}