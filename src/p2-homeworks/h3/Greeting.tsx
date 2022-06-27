import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name:string
    setNameCallback: (name:string)=>void
    addUser: ()=>void
    error: boolean
    totalUsers: number
    colbackError:(value: boolean)=>void
}

export function Greeting (props:GreetingPropsType){
    const inputClass = props.error? s.error:'' // need to fix with (?:)

    const setNameCallback = (
        e:ChangeEvent<HTMLInputElement>)=> {
        props.setNameCallback(e.currentTarget.value)
        props.colbackError(false)
    }



    return (
        <div>
        <div>
            <input
                value={props.name}
                onChange={setNameCallback}
                className={inputClass}/>

            <button onClick={props.addUser}>add</button>
            <span>{props.totalUsers}</span>
        </div>
            {props.error&&<span className={s.errorText}>{'NAME IS REQUIRE!'}</span>}

        </div>
    )
}


