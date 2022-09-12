import React from 'react'
import {FilterType} from "./HW2";
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {

    affair: string
    deleteAffairCallback: () => void
    priority: FilterType
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback()
    }

    return (
        <div>
            {props.affair}
            <span className={style.priopity}>{props.priority}</span>

            <SuperButton red onClick={deleteCallback}>
                delete
            </SuperButton>

        </div>
    )
}

export default Affair
