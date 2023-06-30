import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlName = () => {
    return (
        <FormControl>
            <FormControl.Label htmlFor="name" required={true}>Nome completo</FormControl.Label>
            <FormControl.Input type="text" id="name" value="Daniel Silva Pinheiro ferreira" />
        </FormControl>
    )
}