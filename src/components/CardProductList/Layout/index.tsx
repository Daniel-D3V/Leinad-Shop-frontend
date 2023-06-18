import { CardProductProps } from "../Organisms/CardProduct"
import { RowCards } from "../Organisms/RowCards"

export const ListCardProduct = () => {

    const products: CardProductProps[] = [
        {
            id: "1231231312313",
            title: "Conta valorant full acesso com premium ativo e tudo desbloqueado no jogo",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            promotion: {
                old_value: 25,
                value: 30,
                discount_percentage: 10
            },
            product_type: "AUTO",
        },
        {
            id: "1231231312313",
            title: "Conta valorant full acesso com premium ativo e tudo desbloqueado no jogo",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            promotion: {
                old_value: 25,
                value: 30,
                discount_percentage: 10
            },
            product_type: "AUTO",
        },
        {
            id: "1231231312313",
            title: "Conta valorant full acesso com premium ativo e tudo desbloqueado no jogo",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            promotion: {
                old_value: 25,
                value: 30,
                discount_percentage: 10
            },
            product_type: "AUTO",
        },
        {
            id: "1231231312313",
            title: "Conta valorant full acesso com premium ativo e tudo desbloqueado no jogo",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            product_type: "AUTO",
        },
        {
            id: "1231231312313",
            title: "Conta valoro",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            promotion: {
                old_value: 25,
                value: 30,
                discount_percentage: 10
            },
            product_type: "AUTO",
        },
        {
            id: "1231231312313",
            title: "Conta valorant full acesso com premium ativo e tudo desbloqueado no jogo",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            product_type: "AUTO",
        },
        {
            id: "1231231312313",
            title: "Conta valorant full acesso com premium ativo e tudo desbloqueado no jogo",
            price: 25,
            customer: {
                username: "Reth das conta",
                avatarURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119355990219964446/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f.png"
            },
            imageURL: "https://cdn.discordapp.com/attachments/1092644907946094623/1119356161716662272/valorant-vanguard.png",
            product_type: "AUTO",
        }
    ]

    return (
        <RowCards products={products} />
    )
}