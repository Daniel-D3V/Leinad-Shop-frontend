import { FormCard } from "@/pages/dashboard/_shared/Form/FormCard"
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"
import { FormRow } from "@/pages/dashboard/_shared/Form/FormRow"
import { Header } from "@/pages/dashboard/_shared/Header/Layout"
import { FormControlName } from "../../Molecules/FormControl/Name"
import { FormControlCpf } from "../../Molecules/FormControl/Cpf"
import { FormControlDateOfBirth } from "../../Molecules/FormControl/DateOfBirth"

export const InformationSection = () => {
    return (
        <>
            <Header.Root>
                <Header.Title>Informações</Header.Title>
                <Header.Description>Insira com atenção todas as informações que são solicitadas, uma vez enviadas você não conseguirá modificar. Essas informações são necessárias para você Verificar sua conta.</Header.Description>
            </Header.Root>
            <FormRow>
                <FormCard md={6}>
                    <FormControlName />
                </FormCard>
                <FormCard md={3}>
                    <FormControlCpf />
                </FormCard>
                <FormCard md={3}>
                    <FormControlDateOfBirth />
                </FormCard>
            </FormRow>
        </>
    )
}