import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlCpf = () => {
    return (
        <FormControl>
            <FormControl.Label id="cpf" required={true}>CPF</FormControl.Label>
            <FormControl.Input type="text" id="cpf" value="139.421.412-04" />
        </FormControl>
    )
}