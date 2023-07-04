import { DevicesCardLocalizationStyled } from "./styles"

export type DevicesCardLocalizationProps = {
    city: string,
    state: string,
    contry: string
}

export const DevicesCardLocalization = ({ city, state, contry }: DevicesCardLocalizationProps) => {
    return (
        <DevicesCardLocalizationStyled>
            {city}, {state}, {contry}
        </DevicesCardLocalizationStyled>
    )
}