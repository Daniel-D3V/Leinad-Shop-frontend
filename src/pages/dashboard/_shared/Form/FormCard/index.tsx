import { ColProps } from "react-bootstrap"
import { FormCardStyled } from "./styles"


type Props = ColProps & {
    direction?: "left" | "right"
}

export const FormCard = (props: Props) => {
    return (
        <FormCardStyled {...props} />
    )
}