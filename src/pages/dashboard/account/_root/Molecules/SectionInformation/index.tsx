import { FormCard } from "@/pages/dashboard/_shared/Form/FormCard"
import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"
import { FormRow } from "@/pages/dashboard/_shared/Form/FormRow"

export const SectionInformation = () => {
    return (
        <>
            <FormRow>
                <FormCard md={6}>
                    <FormControl.Root>
                        <FormControl.Label htmlFor="username" required={true}>Nome de usuário</FormControl.Label>
                        <FormControl.Input type="text" id="username" value="danield3v" disabled={true} />
                    </FormControl.Root>
                </FormCard>
                <FormCard md={6}>
                    <FormControl.Root>
                        <FormControl.Label id="email" required={true}>E-mail</FormControl.Label>
                        <FormControl.Input type="email" id="text" value="contatodanielsilvaoficial@gmail.com" disabled={true} />
                    </FormControl.Root>
                </FormCard>
            </FormRow >
        </>
    )
}