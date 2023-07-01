import { Header } from "../../../_shared/Header/Layout"
import { SectionInformation } from "../Molecules/SectionInformation"
import { BiographySection } from "../Molecules/BiographySection"

export const DashboardAccountLayout = () => {
    return (
        <>
            <Header.Root>
                <Header.Title>Minha conta</Header.Title>
            </Header.Root>
            <SectionInformation />
            <BiographySection />
        </>
    )
}