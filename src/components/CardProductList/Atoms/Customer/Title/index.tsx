import { CustomerTitleStyled } from "./styles";

type Props = {
    title: string;
}

export const CustomerTitle = ({ title }: Props) => {
    return (
        <CustomerTitleStyled>{title}</CustomerTitleStyled>
    )
}