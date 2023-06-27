import { DefaultTheme } from 'styled-components';

export default {
    title: 'dark',
    colors: {
        primary: '#007bff',
        secondary: '#4EA8DE',
        white: '#fff',
        red: '#ff0000',
        green: '#00ff00',
        purple: '#6a3ce2'
    },
    backgrounds: {
        bgPrimary: '#121214',
        bgSecondary: '#0B0B0D',
        bgDark: '#1D1D20',
    },
    dropshadows: {
        secondary: "#0404051a"
    },
    bagdge: {
        yellow: {
            color: '#e1b538',
            background: '#423a1b75'
        },
    },
    borders: {
        primary: {
            color: '#2D2D2F',
            hover: '#2D2D2F'
        },
        secondary: {
            color: '#272729',
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