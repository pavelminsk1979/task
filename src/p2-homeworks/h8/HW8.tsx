import React, {useReducer} from 'react'
import {
    addInitial,
    homeWorkReducer,
    sortStateAge,
    sortStateName,
    sortStatusOptimist, sortStatusPissimist
} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


export type UserType = {
    _id: number
    name: string
    age: number
    status: string
}

function HW8() {
    const array =[
        {_id: 0, name: 'Кот', age: 3, status: '--и тут норм'},
        {_id: 1, name: 'Александр', age: 66, status: '--поеду домой'},
        {_id: 2, name: 'Коля', age: 16, status: '--поеду домой'},
        {_id: 3, name: 'Виктор', age: 44, status: '--поеду домой'},
        {_id: 4, name: 'Дмитрий', age: 40, status: '--поеду домой'},
        {_id: 5, name: 'Ирина', age: 55, status: '--ну а как я кота одного оставлю'},
    ]

    const [people, dispatchPeople] = useReducer(homeWorkReducer, array)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            samaritanin {p._id}...
            name {p.name}...
            age {p.age}...
            status{p.status}
        </div>
    ))

    const sortName = () => {
        dispatchPeople(addInitial(array))
        dispatchPeople(sortStateName())
    }

    const sortAge = () => {
        dispatchPeople(addInitial(array))
        dispatchPeople(sortStateAge())
    }

    const statusOptimist = () =>{
        dispatchPeople(addInitial(array))
        dispatchPeople(sortStatusOptimist('--поеду домой'))
    }

     const statusPessimist = () => {
         dispatchPeople(addInitial(array))
         dispatchPeople(sortStatusPissimist('--поеду домой'))
     }

    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}

            <div>
                <SuperButton onClick={sortName}>sort Name</SuperButton>
                <SuperButton onClick={sortAge}>sort Age</SuperButton>
                <SuperButton onClick={statusOptimist}>status optimist</SuperButton>
                 <SuperButton onClick={statusPessimist}>status pessimist</SuperButton>
            </div>
            <div>сортировка саморитян</div>
            проверка на патриотизм

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
