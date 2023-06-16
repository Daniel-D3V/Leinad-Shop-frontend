import { CardImage } from "../../Atoms/CardImage"
import { CardTitle } from "../../Atoms/CardTitle"
import { CardStyled } from "./styles"

export const Card = () => {
    return (
        <CardStyled md={2}>
            <CardImage imageURL="https://cdn.discordapp.com/attachments/1117732190533468215/1119279760065958068/next-js-file-structure-atomic-design-project.avif" title="Teste" />
            <CardTitle title="Titulo" />
        </CardStyled>
    )
}