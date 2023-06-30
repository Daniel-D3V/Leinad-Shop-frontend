import React from "react"
import { FormControlStyled } from "./styles"
import { Input } from "../Atoms/Input"
import { Label } from "../Atoms/Label"
import { Textarea } from "../Atoms/Textarea"
import { Example } from "../Atoms/Example"
import { InputPassword } from "../Molecules/InputPassword"
import { Button } from "../Atoms/Button"
import { Select } from "../Atoms/Select"


type Props = {
    children: React.ReactNode
}

const FormControl = ({ children }: Props) => {
    return (
        <FormControlStyled>{children}</FormControlStyled>
    )
}

FormControl.Label = Label
FormControl.Input = Input
FormControl.InputPassword = InputPassword
FormControl.Textarea = Textarea
FormControl.Select = Select
FormControl.Example = Example
FormControl.Button = Button

export { FormControl }