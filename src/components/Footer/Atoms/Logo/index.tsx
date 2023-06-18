import { ThemeProviderContext } from "@/context/ThemeProvider.context"
import { LogoStyled } from "./styles"
import { useContext } from 'react';

export const Logo = () => {
    const { theme } = useContext(ThemeProviderContext)

    return (
        <LogoStyled src={`/themes/${theme}/logofull.svg`} width={1980} height={1080} alt="Leinad Shop" />
    )
}