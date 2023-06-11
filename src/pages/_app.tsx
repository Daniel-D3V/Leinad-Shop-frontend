import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark';
import GlobalStyle from '@/styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
