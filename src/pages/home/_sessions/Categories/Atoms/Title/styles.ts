import { styled } from 'styled-components';

export const TitleStyled = styled.p`
    display: inline-block;
    font-size: 0.95rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${props => props.theme.colors.subtitle};
    margin-bottom: 8px;
    transition: all .3s ease;
    cursor: pointer;
    
    svg {
        font-size: 0.7rem;
        transition: all .3s ease;
    }

    &:hover {
        color: ${props => props.theme.colors.title};

        svg {
            margin-left: 0.3rem;
        }
    }
`