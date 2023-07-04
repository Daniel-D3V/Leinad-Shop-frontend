import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components"

export const ToastContainer = () => {
    const theme = useTheme();

    return (
        <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                style: {
                    background: theme.backgrounds.bgSecondary,
                    color: theme.texts.subtitle,
                    border: `1px solid ${theme.borders.primary.color}`
                }
            }}
        />
    )
}