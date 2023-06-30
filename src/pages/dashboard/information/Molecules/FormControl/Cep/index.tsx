import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlCep = () => {
    return (
        <>
            <FormControl>
                <FormControl.Label htmlFor="cep" required={true}>CEP</FormControl.Label>
                <FormControl.Input type="text" id="cep" value="38390-000" />
            </FormControl>
        </>
    )
}