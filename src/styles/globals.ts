import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.backgrounds.bgPrimary};
        font-size: 14px;
        color: #333;
        font-family: Poppins, sans-serif;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.buttons.primary.background};
        transition: all 0.3s ease;

        &:hover {
            color: ${props => props.theme.buttons.primary.hover.background};
        }
    }
`;