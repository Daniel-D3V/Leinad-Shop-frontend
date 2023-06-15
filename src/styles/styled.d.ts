import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            bgPrimary: string,
            bgSecondary: string,
            bgDark: string,
            white: string,
            red: string
        },
        fonts: {},
        buttons: {
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