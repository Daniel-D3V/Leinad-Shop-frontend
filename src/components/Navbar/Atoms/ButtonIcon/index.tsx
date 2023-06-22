import { Button } from "./styles";

type Props = {
    icon: any,
    onClick?: () => void
}

export function ButtonIcon({ icon, onClick }: Props) {
    return (
        <Button onClick={onClick}>{icon}</Button>
    )
}