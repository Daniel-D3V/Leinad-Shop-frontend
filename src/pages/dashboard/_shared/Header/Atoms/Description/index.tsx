import { DescriptionStyled } from "./styles"

type Props = {
    children: React.ReactNode;
}

export const Description = ({ children }: Props) => {
    return (
        <DescriptionStyled>{children}</DescriptionStyled>
    )
}