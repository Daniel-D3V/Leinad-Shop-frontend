import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlDateOfBirth = () => {
    return (
        <FormControl.Root>
            <FormControl.Label id="dateofbirth" required={true}>Data de nascimento</FormControl.Label>
            <FormControl.Input type="date" id="dateofbirth" />
        </FormControl.Root>
    )
}