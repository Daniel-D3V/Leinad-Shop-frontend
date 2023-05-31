import { createContext } from "react";

interface ThemeToggleContextProps {
    toggleTheme: () => void
}

export const ThemeToggleContext = createContext<ThemeToggleContextProps>({} as ThemeToggleContextProps);