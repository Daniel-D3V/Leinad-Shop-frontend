import { UpdatesCardDetailsMessages } from "./Messages"
import { UpdatesCardDetailsTitle } from "./Title"
import { UpdatesDetailsStyled } from "./styles"

export const UpdatesCardDetails = () => {
    return (
        <UpdatesDetailsStyled>
            <UpdatesCardDetailsTitle />
            <UpdatesCardDetailsMessages />
        </UpdatesDetailsStyled>
    )
}