import { FormCard } from "@/pages/dashboard/_shared/Form/FormCard"
import { OptionProps } from "@/pages/dashboard/_shared/Form/FormControl/Atoms/Select"
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"
import { FormRow } from "@/pages/dashboard/_shared/Form/FormRow"
import { Header } from "@/pages/dashboard/_shared/Header/Layout"
import { FormControlAdress } from "../../Molecules/FormControl/Adress"
import { FormControlCep } from "../../Molecules/FormControl/Cep"
import { FormControlCity } from "../../Molecules/FormControl/City"
import { FormControlState } from "../../Molecules/FormControl/State"
import { FormControlCountry } from "../../Molecules/FormControl/Contry"

export const AddressSection = () => {
    return (
        <>
            <Header direction="left">
                <Header.Title>Endereço</Header.Title>
                <Header.Description>Insira com atenção todas as informações que são solicitadas, uma vez alterada você não conseguirá modificar.</Header.Description>
            </Header >
            <FormRow>
                <FormCard md={9}>
                    <FormControlAdress />
                </FormCard>
                <FormCard md={3}>
                    <FormControlCep />
                </FormCard>
            </FormRow>
            <FormRow>
                <FormCard md={6}>
                    <FormControlCity />
                </FormCard>
                <FormCard md={3}>
                    <FormControlState />
                </FormCard>
                <FormCard md={3} direction="right">
                    <FormControlCountry />
                    <FormControl.Button>Concluir</FormControl.Button>
                </FormCard>
            </FormRow >
        </>
    )
}