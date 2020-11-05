import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, ClassAttributes} from "react";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement>[] =
        options
        ? options.map((o, i) => <option key={i}>{options[i]}</option>)
    : [<option key={1}>none</option>]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.target.value)
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
