import NextNProgress from 'nextjs-progressbar';
import { useTheme } from 'styled-components';

export const ProgressBar = () => {
    const theme = useTheme();

    return (
        <NextNProgress color={theme.colors.primary} startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={false} />
    )
}