import { FormControl } from "@/pages/dashboard/_shared/Form/FormControl/Layout"

export const FormControlAdress = () => {
    return (
        <>
            <FormControl.Root>
                <FormControl.Label id="address" required={true}>Endereço</FormControl.Label>
                <FormControl.Input type="text" id="address" value="Rua Celino Garcia Rosa 216" />
            </FormControl.Root>
        </>
    )
}