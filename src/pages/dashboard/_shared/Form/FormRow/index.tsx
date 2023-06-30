import { FormRowStyled } from "./styles"

type Props = {
    children: React.ReactNode
}

export const FormRow = ({ children }: Props) => {
    return (
        <FormRowStyled>{children}</FormRowStyled>
    )
}