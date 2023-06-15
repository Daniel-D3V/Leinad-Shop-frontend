import { styled } from "styled-components"
import { ButtonIcon } from "../ButtonIcon"

export const ButtonIconBagdeStyled = styled.div`
    position: relative;
`

export const BadgeStyled = styled.span`
    position: absolute;
    top: 3px;
    right: 5px;
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    font-size: 0.6rem;
    font-weight: 400;
    border-radius: 5px;
    padding: 2px;
`