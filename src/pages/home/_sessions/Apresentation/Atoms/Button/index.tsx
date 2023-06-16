import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type Props = {
    children: React.ReactNode,
    onClick?: () => void
};

export const Button = ({ children, onClick }: Props) => {
    return (
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    )
};
