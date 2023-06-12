import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals';
import { ThemeProvider } from '@/context/ThemeProvider.context';
import { EventProvider } from '@/context/EventProvider.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </EventProvider>
  )
}