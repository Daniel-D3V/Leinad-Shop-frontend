import { OptionProps } from "@/pages/dashboard/_shared/Form/FormControl/Atoms/Select";
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlState = () => {

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

    return (
        <>
            <FormControl.Root>
                <FormControl.Label htmlFor="state" required={true}>Estado</FormControl.Label>
                <FormControl.Select options={states} id="state" value="minasgerais" />
            </FormControl.Root>
        </>
    )
}