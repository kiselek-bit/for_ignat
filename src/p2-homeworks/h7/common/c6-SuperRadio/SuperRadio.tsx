import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
                onChangeOption(e.target.value)
        }
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i} className={s.customRadio} >
            <input
                type={"radio"}
                name={name}
                onChange={onChangeCallback}
                value={o}
                checked={value === o}
                // name, checked, value, onChange
            />
            <span>{o}</span>
        </label>
    )) : [];

    return (
        <div className={s.wrapper}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
