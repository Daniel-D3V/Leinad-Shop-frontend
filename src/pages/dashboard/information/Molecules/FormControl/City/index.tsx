import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlCity = () => {
    return (
        <FormControl.Root>
            <FormControl.Label id="city" required={true}>Cidade</FormControl.Label>
            <FormControl.Input type="text" id="city" value="Centralina" />
        </FormControl.Root>
    )
}