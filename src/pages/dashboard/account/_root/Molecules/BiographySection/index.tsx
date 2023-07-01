import { FormCard } from "@/pages/dashboard/_shared/Form/FormCard"
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"
import { FormRow } from "@/pages/dashboard/_shared/Form/FormRow"

export const BiographySection = () => {
    return (
        <>
            <FormRow>
                <FormCard md={12} direction="left">
                    <FormControl.Root>
                        <FormControl.Label htmlFor="biography">Biografia</FormControl.Label>
                        <FormControl.Textarea id="biography" placeholder="Exemplo: 🚀 Leinad Shop é uma loja de vendas produtos online totalmente confiável e com toda credibilidade!" />
                        {/* <FormControl.Example>🐰 Que tal contar um pouquinho sobre você, sua loja ou o que preferir? Eu recomendaria... Ops, desculpe-me! Esqueci que essa decisão não cabe a mim, haha! 😉 Mas adoraria ouvir sua história ou detalhes sobre sua loja.</FormControl.Example> */}
                    </FormControl.Root>
                    <FormControl.Button>Salvar Bio</FormControl.Button>
                </FormCard>
            </FormRow>
        </>
    )
}