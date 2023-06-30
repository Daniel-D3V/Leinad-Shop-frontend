import { ExampleStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const Example = ({ children }: Props) => {
    return (
        <ExampleStyled>{children}</ExampleStyled>
    )
}