import { TextareaHTMLAttributes } from "react"
import { TextAreaStyled } from "./styles"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = (props: Props) => {
    return (
        <TextAreaStyled {...props} />
    )
}