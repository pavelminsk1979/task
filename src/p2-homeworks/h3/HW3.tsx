import React, {useState} from 'react'
import {GreetingContainer} from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => {
        setUsers([{_id:v1(),name},...users])

    }

    return (
        <div>
            <hr/>
            homeworks 3

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

        </div>
    )
}

export default HW3
