import { DefaultTheme } from 'styled-components';

export default {
    title: 'dark',
    colors: {
        primary: '#1E6F9F',
        secondary: '#4EA8DE',
        bgPrimary: '#0c0c0d',
        bgSecondary: '#18181b',
        bgDark: '#0D0D0D',
        white: '#fff',
        red: '#ff0000',
    },
    fonts: {},
    buttons: {
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