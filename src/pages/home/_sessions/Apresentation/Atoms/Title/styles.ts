import { styled } from 'styled-components';

export const TitleStyled = styled.p`
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
    margin-bottom: 8px;
`