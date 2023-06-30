import { FormCard } from "../../_shared/Form/FormCard"
import { OptionProps } from "../../_shared/Form/FormControl/Atoms/Select"
import { FormControl } from "../../_shared/Form/FormControl/Layout"
import { FormRow } from "../../_shared/Form/FormRow"
import { Header } from "../../_shared/Header/Layout"

export const DashboardInformationLayout = () => {

    const states: OptionProps[] = [
        { content: "Acre", value: "acre" },
        { content: "Alagoas", value: "alagoas" },
        { content: "Amapá", value: "amapa" },
        { content: "Amazonas", value: "amazonas" },
        { content: "Bahia", value: "bahia" },
        { content: "Ceará", value: "ceara" },
        { content: "Distrito Federal", value: "distritofederal" },
        { content: "Espírito Santo", value: "espiritosanto" },
        { content: "Goiás", value: "goias" },
        { content: "Maranhão", value: "maranhao" },
        { content: "Mato Grosso", value: "matogrosso" },
        { content: "Mato Grosso do Sul", value: "matogrossodosul" },
        { content: "Minas Gerais", value: "minasgerais" },
        { content: "Pará", value: "para" },
        { content: "Paraíba", value: "paraiba" },
        { content: "Paraná", value: "parana" },
        { content: "Pernambuco", value: "pernambuco" },
        { content: "Piauí", value: "piaui" },
        { content: "Rio de Janeiro", value: "riodejaneiro" },
        { content: "Rio Grande do Norte", value: "riograndedonorte" },
        { content: "Rio Grande do Sul", value: "riograndedosul" },
        { content: "Rondônia", value: "rondonia" },
        { content: "Roraima", value: "roraima" },
        { content: "Santa Catarina", value: "santacatarina" },
        { content: "São Paulo", value: "saopaulo" },
        { content: "Sergipe", value: "sergipe" },
        { content: "Tocantins", value: "tocantins" },
    ];

    const countries: OptionProps[] = [
        { content: "Afghanistan", value: "afghanistan" },
        { content: "Argentina", value: "argentina" },
        { content: "Australia", value: "australia" },
        { content: "Brazil", value: "brazil" },
        { content: "Canada", value: "canada" },
        { content: "China", value: "china" },
        { content: "Egypt", value: "egypt" },
        { content: "France", value: "france" },
        { content: "Germany", value: "germany" },
        { content: "India", value: "india" },
        { content: "Italy", value: "italy" },
        { content: "Japan", value: "japan" },
        { content: "Mexico", value: "mexico" },
        { content: "Russia", value: "russia" },
        { content: "South Africa", value: "southafrica" },
        { content: "Spain", value: "spain" },
        { content: "United Kingdom", value: "unitedkingdom" },
        { content: "United States", value: "unitedstates" },
    ];

    return (
        <>
            <Header direction="left">
                <Header.Title>Informações</Header.Title>
                <Header.Description>Insira com atenção todas as informações que são solicitadas, uma vez enviadas você não conseguirá modificar. Essas informações são necessárias para você Verificar sua conta.</Header.Description>
            </Header >
            <FormRow>
                <FormCard md={6}>
                    <FormControl>
                        <FormControl.Label htmlFor="name" required={true}>Nome completo</FormControl.Label>
                        <FormControl.Input type="text" id="name" value="Daniel Silva Pinheiro ferreira" />
                    </FormControl>
                </FormCard>
                <FormCard md={3}>
                    <FormControl>
                        <FormControl.Label id="cpf" required={true}>CPF</FormControl.Label>
                        <FormControl.Input type="text" id="cpf" value="139.421.412-04" />
                    </FormControl>
                </FormCard>
                <FormCard md={3}>
                    <FormControl>
                        <FormControl.Label id="dateofbirth" required={true}>Data de nascimento</FormControl.Label>
                        <FormControl.Input type="date" id="dateofbirth" />
                    </FormControl>
                </FormCard>
            </FormRow>
            <Header direction="left">
                <Header.Title>Endereço</Header.Title>
                <Header.Description>Insira com atenção todas as informações que são solicitadas, uma vez alterada você não conseguirá modificar.</Header.Description>
            </Header >
            <FormRow>
                <FormCard md={9}>
                    <FormControl>
                        <FormControl.Label id="address" required={true}>Endereço</FormControl.Label>
                        <FormControl.Input type="text" id="address" value="Rua Celino Garcia Rosa 216" />
                    </FormControl>
                </FormCard>
                <FormCard md={3}>
                    <FormControl>
                        <FormControl.Label htmlFor="cep" required={true}>CEP</FormControl.Label>
                        <FormControl.Input type="text" id="cep" value="38390-000" />
                    </FormControl>
                </FormCard>
            </FormRow>
            <FormRow>
                <FormCard md={6}>
                    <FormControl>
                        <FormControl.Label id="city" required={true}>Cidade</FormControl.Label>
                        <FormControl.Input type="text" id="city" value="Centralina" />
                    </FormControl>
                </FormCard>
                <FormCard md={3}>
                    <FormControl>
                        <FormControl.Label htmlFor="state" required={true}>Estado</FormControl.Label>
                        <FormControl.Select options={states} id="state" value="minasgerais" />
                    </FormControl>
                </FormCard>
                <FormCard md={3} direction="right">
                    <FormControl>
                        <FormControl.Label htmlFor="country" required={true}>País</FormControl.Label>
                        <FormControl.Select options={countries} id="country" value="brazil" />
                    </FormControl>
                    <FormControl.Button>Concluir</FormControl.Button>
                </FormCard>
            </FormRow >
        </>
    )
}