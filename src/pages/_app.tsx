import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import GlobalStyle from '@/styles/global';
import { useState } from 'react';
import { ThemeToggleContext } from '@/context/ThemeToggle.context';
import { usePersistedState } from '@/utils/usePersistedState';

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}