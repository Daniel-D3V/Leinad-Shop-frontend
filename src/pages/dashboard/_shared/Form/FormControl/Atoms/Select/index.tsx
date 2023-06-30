import { SelectHTMLAttributes } from "react";
import { SelectStyled } from "./styles"

export type OptionProps = {
    content: string,
    value: string
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
    options: OptionProps[]
};

export const Select = (props: Props) => {
    return (
        <SelectStyled {...props}>
            {props.options.map((option, index) => (
                <option value={option.value} key={index}>{option.content}</option>
            ))}
        </SelectStyled>
    )
}