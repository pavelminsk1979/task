import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void
    addUser: () => void
    error: boolean
    totalUsers: number
    colbackError: (value: boolean) => void
}

export function Greeting(props: GreetingPropsType) {
    const inputClass = props.error ? s.error : ''

    const setNameCallback = (
        e: ChangeEvent<HTMLInputElement>) => {
        props.setNameCallback(e.currentTarget.value)
        props.colbackError(false)
    }


    return (
        <div>
            <div>
                <SuperInputText
                    value={props.name} onChange={setNameCallback}
                    spanClassName={inputClass}
                />

                <SuperButton onClick={props.addUser}>
                    added+1
                </SuperButton>
                <span>{props.totalUsers}</span>
            </div>
            {props.error && <span className={s.errorText}>{'NAME IS REQUIRE!'}</span>}

        </div>
    )
}


