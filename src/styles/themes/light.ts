import { DefaultTheme } from 'styled-components';

export default {
    title: 'light',
    colors: {
        primary: '#1E6F9F',
        secondary: '#4EA8DE',
        white: '#fff',
        red: '#ff0000',
        green: '#00ff00',
    },
    backgrounds: {
        bgPrimary: '#f5f5f5',
        bgSecondary: '#f4f4f4',
        bgDark: '#c2c2c2',
    },
    texts: {
        title: '#333',
        subtitle: '#040405ff',
        description: '#040405a6',
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
            color: "#333",
            borderColor: "#0404051a",
            hover: {
                color: "#222",
                borderColor: "#04040533"
            }
        }
    },
    icons: {
        theme: {
            color: "#000"
        }
    }
} as DefaultTheme