import { LinkStyled } from "./styles"

type Props = {
    href: string,
    content: string
}

export const Link = ({ href, content }: Props) => {
    return (
        <LinkStyled href={href}>{content}</LinkStyled>
    )
}