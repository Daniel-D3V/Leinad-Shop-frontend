import { styled } from "styled-components";

interface ItemMenuStyledProps {
    selected?: boolean
    isDanger?: boolean
}

export const ItemMenuStyled = styled.li<ItemMenuStyledProps>`
    width: 100%;
    text-align: left;
    padding: 13px 20px;
    background: ${props => props.theme.backgrounds.bgDark};
    color: ${props => props.theme.texts.subtitle};
    font-weight: 500;
    border-radius: 5px;
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease;

    svg {
        width: 17px;
        height: 17px;
    }

    ${props => props.selected && `
        background: ${props.theme.colors.primary};
        color: ${props.theme.colors.white};
    `}

    ${props => props.isDanger && `
        color: ${props.theme.colors.red};
    `}
`