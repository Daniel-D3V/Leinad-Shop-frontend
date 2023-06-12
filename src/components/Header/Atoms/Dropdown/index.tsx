import { useState } from 'react';
import { DropDownStyled } from './styles'
import { ButtonToggle } from './ButtonToggle';
import { Content } from './Content';

type Props = {
    children: React.ReactNode
}

export function DropDown({ children }: Props) {
    const [active, setActive] = useState(false);

    return (
        <DropDownStyled onClick={() => { setActive(!active) }}>
            <ButtonToggle toggle={() => { setActive(!active) }} />
            <Content active={active}>{children}</Content>
        </DropDownStyled>
    )
}