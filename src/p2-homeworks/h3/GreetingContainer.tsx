import React, {useState} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}


export function GreetingContainer(props: GreetingContainerPropsType) {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const setNameCallback = (name: string) => {
        setName(name)

    }
const colbackError = (value: boolean) => {
    setError(value)
}

    const addUser = () => {
        if (name.trim() !== '') {
            props.addUserCallback(name.trim())
            alert(`Hello ${name.trim()} !`)
            setName('')
        }else {
            setError(true)
        }
    }

    const totalUsers = props.users.length

    return (
        <Greeting
            colbackError={colbackError}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}


