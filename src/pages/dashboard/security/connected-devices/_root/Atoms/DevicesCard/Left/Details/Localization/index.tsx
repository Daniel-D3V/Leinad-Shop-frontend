import { TimeAgo } from "@/components/TimeAgo";
import { DevicesCardLocalizationSeparatorStyled, DevicesCardLocalizationStyled } from "./styles";

export type DevicesCardLocalizationProps = {
    city: string,
    state: string,
    contry: string,
    date?: Date
}

export const DevicesCardLocalization = ({ city, state, contry, date }: DevicesCardLocalizationProps) => {
    return (
        <DevicesCardLocalizationStyled>
            {city}, {state}, {contry} {date && (<>
                <DevicesCardLocalizationSeparatorStyled />
                <TimeAgo date={date} />
            </>)}
        </DevicesCardLocalizationStyled>
    )
}