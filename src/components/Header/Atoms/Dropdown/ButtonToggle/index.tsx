import { ButtonToggleStyled } from "./styles"
import { FiMenu } from 'react-icons/fi';

type Props = {
    toggle: () => void
}

export function ButtonToggle({ toggle }: Props) {
    return (
        <ButtonToggleStyled onClick={toggle}><FiMenu /></ButtonToggleStyled>
    )
}