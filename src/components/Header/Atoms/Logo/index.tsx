import Image from 'next/image';
import { ThemeProviderContext } from '@/context/ThemeProvider.context';
import { useContext } from 'react';

export function Logo() {

    const { theme } = useContext(ThemeProviderContext)

    return (
        <Image src={`/themes/${theme}/logo.png`} width={50} height={50} alt="Leinad Shop" />
    )
}