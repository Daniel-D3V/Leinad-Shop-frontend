import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import React, { createContext, useState } from 'react';
import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import usePersistedState from '@/hooks/usePersistedState';

type ThemeOptions = "dark" | "light"

interface ThemeProviderContextProps {
    theme: string,
    setTheme: (theme: ThemeOptions) => void
}

export const ThemeProviderContext = createContext<ThemeProviderContextProps>({} as ThemeProviderContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = usePersistedState<ThemeOptions>("theme", "light");

    const themes = {
        light: light,
        dark: dark
    }

    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme }}>
            <ThemeProviderStyled theme={themes[theme]}>
                {children}
            </ThemeProviderStyled>

            <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}>{theme}</button>
        </ThemeProviderContext.Provider>
    )
}