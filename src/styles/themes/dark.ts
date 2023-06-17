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
        bgSecondary: '#121214',
        bgDark: '#0D0D0D',
    },
    dropshadows: {
        secondary: "#0404051a"
    },
    borders: {
        secondary: {
            color: '#1A1A1C',
            hover: '#2D2D2F'
        }
    },
    texts: {
        title: '#fafafa',
        subtitle: '#C4C4C4',
        description: '#A1A1A1',
        price: '#e9e9e9',
        subprice: '#A1A1A1'
    },
    fonts: {},
    buttons: {
        primary: {
            color: '#fff',
            background: '#007bff',
            hover: {
                background: '#4aa1ff'
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