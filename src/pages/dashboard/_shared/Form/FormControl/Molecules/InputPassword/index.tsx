import { useState } from "react"
import { Input, InputProps } from "../../Atoms/Input"
import { InputPasswordButton } from "../../Atoms/InputPassword/Button"
import { InputPasswordStyled } from "./styles"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { InputPasswordInput } from "../../Atoms/InputPassword/Input"

type Props = InputProps & {}

export const InputPassword = (props: Props) => {

    const [focus, setFocus] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    const handleClick = () => {
        setShow(!show)
    }

    const handleFocus = () => {
        setFocus(!focus)
    }

    return (
        <InputPasswordStyled focus={focus}>
            <InputPasswordInput {...props} type={show ? "password" : "text"} onFocus={handleFocus} onBlur={handleFocus} />
            <InputPasswordButton onClick={handleClick}>
                {show && (<BsEyeFill />)}
                {!show && (<BsEyeSlashFill />)}
            </InputPasswordButton>
        </InputPasswordStyled>
    )
}