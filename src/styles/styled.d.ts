import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            bgPrimary: string,
            bgSecondary: string,
            bgDark: string
        },
        fonts: {}
    }
}