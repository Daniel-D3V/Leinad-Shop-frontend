import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useTheme } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { theme, setTheme } = useTheme();

  return (
    <>
      <p>{theme}</p>
      <button onClick={() => { setTheme('dark') }}>dark</button>
      <button onClick={() => { setTheme('light') }}>light</button>
      <button onClick={() => { setTheme('system') }}>system mode</button>
    </>
  )
}
