import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressCallback} // деструктуризация пропсов
) => {
    const inputClass = error && s.error; // need to fix with (?:)

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressCallback}
                error={error}
            />
            <span>{error}</span>
            <SuperButton onClick={addUser} red={false}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
