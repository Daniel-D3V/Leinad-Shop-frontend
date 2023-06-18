import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals';
import { ThemeProvider } from '@/context/ThemeProvider.context';
import { EventProvider } from '@/context/EventProvider.context';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventProvider>
      <ThemeProvider>
        <GlobalStyle />
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </EventProvider>
  )
}