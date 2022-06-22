import React from 'react'
import {FilterType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {

    affair: string
    deleteAffairCallback: ()=>void
    priority:FilterType
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback()}

    return (
        <div>
            {props.affair}
            <span className={style.priopity}>{props.priority}</span>


            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
