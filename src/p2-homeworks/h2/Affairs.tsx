import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={()=>props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = (filter: FilterType) => {props.setFilter(filter)} // need to fix
    const setHigh = (filter: FilterType) => {props.setFilter(filter)}
    const setMiddle = (filter: FilterType) => {props.setFilter(filter)}
    const setLow = (filter: FilterType) => {props.setFilter(filter)}

    return (
        <div>

            {mappedAffairs}

            <button onClick={()=>setAll('all')}>All</button>
            <button onClick={()=>setHigh('high')}>High</button>
            <button onClick={()=>setMiddle('middle')}>Middle</button>
            <button onClick={()=>setLow('low')}>Low</button>
        </div>
    )
}

export default Affairs
