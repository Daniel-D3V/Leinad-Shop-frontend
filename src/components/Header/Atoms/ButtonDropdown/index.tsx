import React, { useState } from 'react';
import { DropDownStyled } from './styles'
import { Content } from './Content';
import { ButtonIconToggle } from './ButtonIconToggle';

type Props = {
    children: React.ReactNode
}

const DropDown = ({ children }: Props) => {
    const [active, setActive] = useState(false);

    const handleButtonClick = () => {
        setActive(!active);
    }

    return (
        <DropDownStyled onClick={() => { setActive(!active) }}>
            <DropDown.ButtonToggle onClick={handleButtonClick} />
            <Content active={active}>{children}</Content>
        </DropDownStyled>
    )
}

DropDown.ButtonToggle = ButtonIconToggle;

export { DropDown };