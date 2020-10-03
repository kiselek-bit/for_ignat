import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    let [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value); // need to fix
        setError('')
    };
    const addUser = () => {
        if (name.trim() !== '') {
            name = name.trim()
            addUserCallback(name)
            alert(`Hello  ${name}!`); // need to fix
            setName('')
        } else {
            setError('Erorr')
            setName('')
        }
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && name !== "") {
            name = name.trim()
            addUserCallback(name)
            alert(`Hello  ${name}!`); // need to fix
            setName('')
        } else {
            setError('Error')
        }
    }
    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressCallback={onKeyPressCallback}
        />
    );
}

export default GreetingContainer;
