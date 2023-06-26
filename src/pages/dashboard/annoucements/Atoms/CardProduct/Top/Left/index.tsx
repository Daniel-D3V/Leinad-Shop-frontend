import { CardProductDetails } from "./Details"
import { CardProductImage } from "./Image"
import { CardProductTopLeftStyled } from "./styles"

export const CardProductTopLeft = () => {
    return (
        <CardProductTopLeftStyled>
            <CardProductImage title="Produto 1" imageURL="https://cdn.discordapp.com/attachments/1092644907946094623/1119355268145352734/Diesel2Fproductv22Fgrand-theft-auto-v2Fhome2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.png" />
            <CardProductDetails id="1231231223" title="Produto 1" />
        </CardProductTopLeftStyled>
    )
}