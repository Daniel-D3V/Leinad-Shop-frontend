import { FormCard } from "@/pages/dashboard/_shared/Form/FormCard"
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"
import { FormRow } from "@/pages/dashboard/_shared/Form/FormRow"

export const ChangePasswordSection = () => {
    return (
        <>
            <FormRow>
                <FormCard md={6}>
                    <FormControl.Root>
                        <FormControl.Label htmlFor="password">Senha</FormControl.Label>
                        <FormControl.InputPassword id="password" placeholder="Preencha o campo se for mudar" />
                    </FormControl.Root>
                </FormCard>
                <FormCard md={6} direction="right">
                    <FormControl.Root>
                        <FormControl.Label htmlFor="confirmPassword">Confirmar Senha</FormControl.Label>
                        <FormControl.InputPassword id="confirmPassword" placeholder="Preencha o campo se for mudar" />
                    </FormControl.Root>
                    <FormControl.Button>Alterar senha</FormControl.Button>
                </FormCard>
            </FormRow>
        </>
    )
}