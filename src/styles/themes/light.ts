import { DefaultTheme } from 'styled-components';

export default {
    title: 'light',
    colors: {
        primary: '#007bff',
        secondary: '#4EA8DE',
        white: '#fff',
        red: '#ff0000',
        green: '#00ff00',
    },
    backgrounds: {
        bgPrimary: '#fff',
        bgSecondary: '#fff',
        bgDark: '#fff',
    },
    dropshadows: {
        secondary: "#fff"
    },
    borders: {
        primary: {
            color: '#c5c5c5',
            hover: '#c2c2c2'
        },
        secondary: {
            color: '#DEDEDE',
            hover: '#c2c2c2'
        }
    },
    texts: {
        title: '#333',
        subtitle: '#040405ff',
        description: '#040405a6',
        price: '#010101',
        subprice: '#040405a6'
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