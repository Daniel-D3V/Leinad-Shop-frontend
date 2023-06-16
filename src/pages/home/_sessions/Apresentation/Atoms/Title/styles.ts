import { styled } from 'styled-components';

export const TitleStyled = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.texts.title};
    margin-bottom: 8px;
`