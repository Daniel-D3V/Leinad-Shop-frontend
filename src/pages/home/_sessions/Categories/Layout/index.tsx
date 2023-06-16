import { Title } from "../Atoms/Title";
import { Card } from "../Molecules/Card";
import { Container } from "../Organisms/Container";
import { RowCard } from "../Organisms/RowCards";
import { Section } from "../Organisms/Section";

export const Categories = () => {

    const categories = [
        {
            title: 'Rust Game',
            imageURL: 'https://cdn.discordapp.com/attachments/1092644907946094623/1119355106488496218/enihR6QwSYiWCNl2HdPfV6R6.png'
        },
        {
            title: 'Free Fire',
            imageURL: 'https://cdn.discordapp.com/attachments/1092644907946094623/1119354796915310772/9zACfwWC3nLgQls-vt4lpz8N0Vv4zWMUXtcFth3oBT5789vmsTktH_fCNXHsGdmtOw4.png'
        },
        {
            title: 'Grand Theft Auto V',
            imageURL: 'https://cdn.discordapp.com/attachments/1092644907946094623/1119355268145352734/Diesel2Fproductv22Fgrand-theft-auto-v2Fhome2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.png'
        },
        {
            title: 'Roblox',
            imageURL: 'https://cdn.discordapp.com/attachments/1092644907946094623/1119355524710936586/roblox.png'
        },
        {
            title: 'Minecraft',
            imageURL: 'https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png'
        },
        {
            title: 'Valorant',
            imageURL: 'https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png'
        }
    ]

    return (
        <Section>
            <Container>
                <Title />
                <RowCard categories={categories} />
            </Container>
        </Section>
    )
}