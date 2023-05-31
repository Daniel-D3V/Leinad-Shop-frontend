import { ThemeToggleContext } from '@/context/ThemeToggle.context'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default function Home() {
  const { toggleTheme } = useContext(ThemeToggleContext)

  return (
    <>
      <button onClick={toggleTheme}>mudar</button>
    </>
  )
}
