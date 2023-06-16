import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            white: string,
            red: string,
            green: string
        },
        texts: {
            title: string,
            subtitle: string,
            description: string,
        },
        backgrounds: {
            bgPrimary: string,
            bgSecondary: string,
            bgDark: string,
        },
        fonts: {},
        buttons: {
            primary: {
                color: string,
                background: string,
                hover: {
                    background: string
                }
            },
            outline: {
                color: string,
                borderColor: string
                hover: {
                    color: string,
                    borderColor: string
                }
            },
        },
        icons: {
            theme: {
                color: string
            }
        }
    }
}