import { DefaultTheme } from 'styled-components';

export default {
    title: 'dark',
    colors: {
        primary: '#1E6F9F',
        secondary: '#4EA8DE',
        white: '#fff',
        red: '#ff0000',
        green: '#00ff00',
    },
    backgrounds: {
        bgPrimary: '#0c0c0d',
        bgSecondary: '#18181b',
        bgDark: '#0D0D0D',
    },
    texts: {
        title: '#fafafa',
        subtitle: '#C4C4C4',
        description: '#C4C4C4',
    },
    fonts: {},
    buttons: {
        primary: {
            color: '#fff',
            background: '#007bff',
            hover: {
                background: '#007b22'
            }
        },
        outline: {
            color: "#999",
            borderColor: "#ffffff1a",
            hover: {
                color: "#ddd",
                borderColor: "#ffffff33"
            }
        }
    },
    icons: {
        theme: {
            color: "#f4f4f5"
        }
    }
} as DefaultTheme