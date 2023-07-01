import { CardDetailsDescription } from "./Description"
import { CardDetailsTitle } from "./Title"
import { CardDetailsStyled } from "./styles"

type Props = {
    title: string,
    description?: string
}

export const CardDetails = ({ title, description }: Props) => {
    return (
        <CardDetailsStyled>
            <CardDetailsTitle title={title} />
            {description && (<CardDetailsDescription description={description} />)}
        </CardDetailsStyled>
    )
}