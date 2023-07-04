import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals';
import { ThemeProvider } from '@/context/ThemeProvider.context';
import { EventProvider } from '@/context/EventProvider.context';
import { ToastContainer } from '@/components/Utils/ToastContainer';
import { ProgressBar } from '@/components/ProgressBar';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <EventProvider>
      <ThemeProvider>
        <GlobalStyle />
        <ProgressBar />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </EventProvider>
  )
}