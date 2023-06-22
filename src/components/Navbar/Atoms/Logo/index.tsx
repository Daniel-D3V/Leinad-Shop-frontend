import Image from 'next/image';
import { ThemeProviderContext } from '@/context/ThemeProvider.context';
import { useContext } from 'react';
import Link from 'next/link';

export function Logo() {

    const { theme } = useContext(ThemeProviderContext)

    return (
        <Link href="/">
            <Image src={`/themes/${theme}/logo.svg`} width={50} height={50} alt="Leinad Shop" />
        </Link>
    )
}